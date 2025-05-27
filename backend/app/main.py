from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from app.manim_llm_core.main import generate
import os

app = FastAPI()

# Mount the media directory to serve static files
media_dir = "/Users/paul/Developer/Projects/ProjectX/backend/media"
app.mount("/media", StaticFiles(directory=media_dir), name="media")

class QueryModel(BaseModel):
    query: str

@app.post('/query/')
async def query_request(query: QueryModel):
    try:
        output_file = generate(query.query)
        
        # Check if file exists
        if not os.path.exists(output_file):
            raise HTTPException(status_code=404, detail="Generated video file not found")
        
        # Get the relative path for the frontend to access via static route
        relative_path = output_file.replace(media_dir, "/media")
        
        # Return the path to the file instead of the file itself
        return {"videoPath": relative_path}
    except Exception as e:
        # Log the error and return a proper error response
        print(f"Error processing query: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
