from decimal import Decimal

from pydantic import BaseModel


class OrderOut(BaseModel):
    id: int
    user_id: int
    total: Decimal

    model_config = {"from_attributes": True}
