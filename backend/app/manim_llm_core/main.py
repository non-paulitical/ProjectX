# TODO: Fix the custom output media folder so that the files are created
# inside a media folder in this directory.

import os
from subprocess import PIPE, Popen
from fastapi import HTTPException
from google import genai
from uuid import uuid4
import time

def generate_uuid():
    return uuid4()

def create_media(script_file):
    unique_id = generate_uuid()
    output_file = f'animation-{unique_id}'

    with Popen(['manim', '-o', output_file, '-ql', script_file],
               stdout=PIPE,
               stderr=PIPE,
               universal_newlines=True) as process:
        stdout, stderr = process.communicate()
        
        print(f"Manim stdout: {stdout}")
        print(f"Manim stderr: {stderr}")

        if process.returncode == 0 and 'error' not in stderr.lower():
            return output_file + '.mp4'
        else: 
            raise HTTPException(status_code=500, detail=f'{stderr} during manim rendering')

def generate(query, script_file = 'app/manim_llm_core/manim.py'):
    if not query:
        raise HTTPException(status_code=400, detail="Query cannot be empty")
        
    try:
        client = genai.Client(
            api_key=os.environ.get("GEMINI_API_KEY"),
        )

        response = client.models.generate_content(
            model="gemini-2.5-flash-preview-04-17",
            contents=f"""Write a code in Python using the manim-community library to
                    generate an animation exlaining the following query: {query}
                    NOTE: Your response should only include the code and nothing else,
                    so that is is easier to me to redirect your response to a python
                    and run it without formatting and editing your response."""
        )

        code = '\n'.join(str(response.text).split('\n')[1:-2])

        with open(script_file, 'w') as file:
            file.write(code)

        # Create the output directory if it doesn't exist
        output_dir = '/Users/paul/Developer/Projects/ProjectX/backend/media/videos/manim/480p15'
        os.makedirs(output_dir, exist_ok=True)
        
        # Generate the video
        video_filename = create_media(script_file)
        output_file = os.path.join(output_dir, video_filename)
        
        # Wait a moment to ensure the file is fully written
        time.sleep(0.5)
        
        # Verify file exists and is accessible
        if not os.path.exists(output_file):
            raise HTTPException(status_code=404, detail=f"Generated video file not found at {output_file}")
            
        if not os.access(output_file, os.R_OK):
            raise HTTPException(status_code=403, detail=f"Generated video file is not readable at {output_file}")
            
        return output_file
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating animation: {str(e)}")

if __name__ == '__main__':
    generate('What is a matrix?', 'app/manim_llm_core/manim.py')
