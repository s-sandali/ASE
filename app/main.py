from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import models to ensure they are registered with Base before create_all
import app.models  # noqa: F401

from app.database.session import Base, engine
from app.routes import auth_router, products_router, cart_router, checkout_router

# ── Create all tables on startup ─────────────────────────────────────────────
# In production you would use Alembic migrations instead.
Base.metadata.create_all(bind=engine)

# ── Application factory ───────────────────────────────────────────────────────
app = FastAPI(
    title="E-Commerce API",
    description="Minimal e-commerce backend built with FastAPI + SQLAlchemy + PostgreSQL",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# ── CORS ──────────────────────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routers ───────────────────────────────────────────────────────────────────
app.include_router(auth_router)
app.include_router(products_router)
app.include_router(cart_router)
app.include_router(checkout_router)


@app.get("/", tags=["Health"])
def health_check():
    return {"status": "ok", "message": "E-Commerce API is running"}
