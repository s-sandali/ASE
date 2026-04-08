from pydantic import BaseModel, field_validator

from app.schemas.product import ProductOut


class CartItemAdd(BaseModel):
    product_id: int
    quantity: int = 1

    @field_validator("quantity")
    @classmethod
    def quantity_must_be_positive(cls, v: int) -> int:
        if v < 1:
            raise ValueError("Quantity must be at least 1")
        return v


class CartItemOut(BaseModel):
    id: int
    product: ProductOut
    quantity: int

    model_config = {"from_attributes": True}


class CartOut(BaseModel):
    id: int
    items: list[CartItemOut]

    model_config = {"from_attributes": True}
