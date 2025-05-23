# TODO: Fix the custom output media folder so that the files are created
# inside a media folder in this directory.

import os
from subprocess import Popen
from google import genai
from uuid import uuid4

def generateUUID():
    return uuid4()

def createMedia(script_file):
    unique_id = generateUUID()
    output_file = f'animation-{unique_id}.py'

    with Popen(['manim', '-o', output_file, '-pql', script_file]):
        return output_file

def generate(query, script_file):
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

    output_file = createMedia(script_file)

    return output_file

if __name__ == '__main__':
    generate('What is a matrix?', 'app/manim_llm_core/manim.py')
