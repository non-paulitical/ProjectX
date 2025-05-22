from fastapi import FastAPI
from pydantic import BaseModel
from app.manim_llm_core.main import generate

app = FastAPI()

class QueryModel(BaseModel):
    query: str

@app.post('/query/')
async def send_query(query: QueryModel):
    response_file_path = generate(query)

    return {
        'file_path': response_file_path
    }
