from pydantic import BaseModel, Field
import json

class ItemBase(BaseModel):
    title: str = Field(..., example="Cadeira", max_length=1024)
    description: str = Field(..., example="running", max_length=1024)

class Item(ItemBase):
    id: int = Field(..., gt=0, example=1)
    image_location: str
    available: bool = Field(False, description="done task or not")

    class Config:
        orm_mode = True


class ItemCreate(ItemBase):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate_to_json

    @classmethod
    def validate_to_json(cls, value):
        if isinstance(value, str):
            return cls(**json.loads(value))
        return value

class ItemUpdate(ItemBase):
    available: bool = Field(False, description="done task or not")
