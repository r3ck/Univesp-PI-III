from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import item, user, about

app = FastAPI()

origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods="*"
)

app.include_router(item.router)
app.include_router(user.router)
app.include_router(about.router)
