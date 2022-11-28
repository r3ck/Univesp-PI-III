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

router = APIRouter(prefix="/about", tags=["about"])

@router.get("")
async def about(current_user: user_schema.User = Depends(authenticate.get_current_active_user)):
    return {
        'about' : [
            { 'id':1, 'text':'Do non tempor aliquip qui dolor sit pariatur. Proident sit id pariatur ut id non aute. Ad ipsum mollit aliqua veniam occaecat aliqua reprehenderit commodo cupidatat cillum anim voluptate aliqua ut. Adipisicing nulla enim voluptate adipisicing ipsum sint. Velit aliquip exercitation enim mollit qui nostrud fugiat eu magna in sint elit aliqua minim. Lorem proident commodo veniam deserunt deserunt mollit duis. Enim ad irure esse aliqua ut nulla id aute laboris sunt adipisicing dolore nulla.'}, 
            { 'id':2, 'text':'Velit proident amet aute ut voluptate aliquip pariatur Lorem veniam aute consectetur irure adipisicing amet. Magna reprehenderit sunt tempor occaecat ipsum ea ex anim commodo. Veniam minim enim sit non ex sint voluptate sint nostrud incididunt ad enim fugiat adipisicing.'},
            { 'id':3, 'text':'Ullamco ad quis Lorem magna sint laborum ad. Eiusmod enim magna excepteur sunt. Proident ea fugiat Lorem Lorem cupidatat fugiat.'},  
        ]
    }



