from typing import List, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.engine import Result
from models import model
from schema import item as item_schema


async def create_item(
    db: AsyncSession,
    item_create: item_schema.ItemCreate,
    user_id: int,
    file_path: str
) -> model.Item:
    item = model.Item(**item_create.dict(), owner_id = user_id, image_location = file_path)
    item.available = False
    db.add(item)
    await db.commit()
    await db.refresh(item)
    return item


async def get_item(db: AsyncSession, id: int) -> Optional[model.Item]:
    stmt = select(model.Item).where(model.Item.id == id)
    result: Result = await db.execute(stmt)
    return result.scalar()

### Todo
async def get_items(db: AsyncSession, id: int) -> List[item_schema.Item]:
    print('FindMe', id)
    # if id == None:
    #     stmt = select(model.Item).where(model.Item.owner_id == id)
    # else:
    stmt = select(model.Item)
    result: Result = await db.execute(stmt)
    return result.scalars().all()


async def update_item(
    db: AsyncSession, item: model.Item
) -> model.Item:
    db.add(item)
    await db.commit()
    await db.refresh(item)
    return item


async def delete_item(db: AsyncSession, item: model.Item) -> None:
    await db.delete(item)
    await db.commit()
