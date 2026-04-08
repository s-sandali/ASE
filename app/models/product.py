from sqlalchemy import Column, Integer, String, Numeric, Text

from app.database.session import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False, index=True)
    price = Column(Numeric(10, 2), nullable=False)
    old_price = Column(Numeric(10, 2), nullable=True)
    rating = Column(Numeric(3, 1), nullable=True)
    reviews_count = Column(Integer, default=0)
    description = Column(Text, nullable=True)
    material = Column(String, nullable=True)
    product_type = Column(String, nullable=True)
    heel_type = Column(String, nullable=True)
    available_sizes = Column(String, nullable=True)
    weight = Column(String, nullable=True)
    image_url = Column(String, nullable=True)
