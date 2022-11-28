from typing import List
from fastapi import APIRouter, Depends, HTTPException, Path, status, UploadFile, File, Form, Body
from sqlalchemy.ext.asyncio import AsyncSession
from schema import item as item_schema, user as user_schema
from db import get_db
from models import model
from cruds import item as item_crud
from libs import authenticate
import aiofiles
from pydantic import BaseModel, Field
from typing import Optional
import json
from fastapi.responses import FileResponse



router = APIRouter(prefix="/items", tags=["item"])


@router.get("", response_model=List[item_schema.Item])
async def list_items(
    current_user: user_schema.User = Depends(
        authenticate.get_current_active_user),
    db: AsyncSession = Depends(get_db)
):
    return await item_crud.get_items(db, None)

@router.get("/me", response_model=List[item_schema.Item])
async def list_items(
    current_user: user_schema.User = Depends(
        authenticate.get_current_active_user),
    db: AsyncSession = Depends(get_db)
):
    return await item_crud.get_items(db, current_user.id)

# https://stackoverflow.com/questions/71108731/how-to-include-json-and-file-data-together-in-fastapi-endpoint
# https://stackoverflow.com/questions/65504438/how-to-add-both-file-and-json-body-in-a-fastapi-post-request/70640522#70640522
# https://stackoverflow.com/questions/65504438/how-to-add-both-file-and-json-body-in-a-fastapi-post-request
@router.post("") # , response_model=item_schema.Item
async def create_item(
    item_body: item_schema.ItemCreate = Body(...),
    current_user: user_schema.User = Depends(
        authenticate.get_current_active_user),
    in_file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db)
):
    file_location = f"files/{in_file.filename}"
    async with aiofiles.open(file_location, 'wb') as out_file:
        content = await in_file.read()  # async read
        await out_file.write(content)  # async write
    return await item_crud.create_item(db, item_body, current_user.id, file_location)


@router.put("/{item_id}", response_model=item_schema.Item)
async def update_item(
    item_body: item_schema.ItemUpdate,
    item_id: int = Path(..., gt=0),
    current_user: user_schema.User = Depends(
        authenticate.get_current_active_user),
    db: AsyncSession = Depends(get_db),
):
    item = await item_crud.get_item(db, item_id)
    if item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    if item.owner_id != current_user.id:
        raise HTTPException(
            status_code=401, detail="Not authenticated for updating this item")
    item.title = item_body.title
    item.done = item_body.done
    return await item_crud.update_item(db, item)


@router.delete("/{item_id}", response_model=None)
async def delete_item(
    item_id: int = Path(..., gt=0),
    db: AsyncSession = Depends(get_db),
    current_user: user_schema.User = Depends(
        authenticate.get_current_active_user)
):
    item = await item_crud.get_item(db, item_id)
    if item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    if item.owner_id != current_user.id:
        raise HTTPException(
            status_code=401, detail="Not authenticated for deleting this item")
    await item_crud.delete_item(db, item)

@router.get("/files/{filepath}")
async def main(filepath):
    return FileResponse(f"files/{filepath}")