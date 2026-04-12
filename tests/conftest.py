"""
Shared pytest fixtures for the ASE e-commerce backend.

Provides:
  - `db_session`   – an isolated SQLite in-memory session that rolls back
                     after every test so tests never pollute each other.
  - `client`       – a FastAPI TestClient wired to the test DB session.
  - `auth_headers` – a helper fixture that registers + logs in a user and
                     returns the Authorization header dict ready to pass to
                     client.get/post/delete calls.
"""

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.database.session import Base, get_db
from app.main import app

# ── Test database (SQLite in-memory, one file per test run) ──────────────────
TEST_DATABASE_URL = "sqlite:///./test.db"

test_engine = create_engine(
    TEST_DATABASE_URL,
    connect_args={"check_same_thread": False},  # required for SQLite + pytest
)
TestingSessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=test_engine
)


# ── Session fixture ───────────────────────────────────────────────────────────
@pytest.fixture(scope="function")
def db_session():
    """
    Creates all tables, yields a fresh session, then drops everything.
    Each test gets a clean slate — no leftover rows between tests.
    """
    Base.metadata.create_all(bind=test_engine)
    session = TestingSessionLocal()
    try:
        yield session
    finally:
        session.close()
        Base.metadata.drop_all(bind=test_engine)


# ── TestClient fixture ────────────────────────────────────────────────────────
@pytest.fixture(scope="function")
def client(db_session):
    """
    FastAPI TestClient whose get_db dependency is overridden to use the
    isolated test session instead of the real PostgreSQL database.
    """
    def override_get_db():
        try:
            yield db_session
        finally:
            pass  # session lifecycle managed by db_session fixture

    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app) as c:
        yield c
    app.dependency_overrides.clear()


# ── Auth helper fixture ───────────────────────────────────────────────────────
@pytest.fixture(scope="function")
def auth_headers(client):
    """
    Registers a throw-away test user, logs in, and returns an Authorization
    header dict so authenticated endpoints can be called with:

        client.get("/cart/", headers=auth_headers)
    """
    credentials = {"email": "testuser@example.com", "password": "TestPass123!"}

    # Register
    client.post("/auth/register", json=credentials)

    # Login (OAuth2 form-encoded)
    response = client.post(
        "/auth/login",
        data={"username": credentials["email"], "password": credentials["password"]},
    )
    token = response.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}
