from decimal import Decimal

from pydantic import BaseModel, field_validator


class ProductCreate(BaseModel):
    name: str
    price: Decimal

    @field_validator("price")
    @classmethod
    def price_must_be_positive(cls, v: Decimal) -> Decimal:
        if v <= 0:
            raise ValueError("Price must be greater than zero")
        return v


class ProductOut(BaseModel):
    id: int
    name: str
    price: Decimal

    model_config = {"from_attributes": True}
