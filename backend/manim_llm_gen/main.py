# To run this code you need to install the following dependencies:
# pip install google-genai

import os
from google import genai
from google.genai import types


def generate(file, query):

    response = ''

    client = genai.Client(
        api_key=os.environ.get("GEMINI_API_KEY"),
    )

    model = "gemini-2.0-flash"
    contents = [
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text=f"""Write a code in Python using the manim-community library to generate an animation exlaining the following query: {query}.
                NOTE: Your response should only include the code and nothing else, so that is is easier to me to redirect your response to a python and run it without
                formatting and editing your response. Also never use classes that depend on Latex."""),
            ],
        ),
    ]
    generate_content_config = types.GenerateContentConfig(
        response_mime_type="text/plain",
    )

    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=generate_content_config,
    ):

        if chunk.text in (['`'] + list('python')):
            continue
        response += str(chunk.text)

    file.write(response)

if __name__ == "__main__":
    query = 'What is PI?'

    with open('./manim.py', 'w+') as file:
        generate(file, query)
