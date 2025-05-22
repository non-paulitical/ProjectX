import os
from subprocess import PIPE, Popen
from google import genai

def createMedia():
    with Popen(['ls', '-lah'],
               stdout=PIPE,
               stderr=PIPE,
               universal_newlines=True) as process:

        stdout, stderr = process.communicate()

        with open('stdout.txt', 'w+') as file:
            file.write(stdout)

        # if stdout:
        #     return stdout
        #
        #
        last_line = ''
        for line in stdout:
            last_line = line

        if last_line:
            return last_line

        raise Exception({'Error': stderr})

def generate(query, filename = 'manim.py'):
    client = genai.Client(
        api_key=os.environ.get("GEMINI_API_KEY"),
    )

    response = client.models.generate_content(
        model="gemini-2.5-flash-preview-04-17",
        contents=f"""Write a code in Python using the manim-community library to generate an
                animation exlaining the following query: {query} NOTE: Your response should only include the code and
                nothing else, so that is is easier to me to redirect your response to a python and run it without
                formatting and editing your response."""
    )

    code = '\n'.join(str(response.text).split('\n')[1:-2])

    with open(filename, 'w') as file:
        file.write(code)

    # media_file_path = createMedia(filename)
    #
    # return media_file_path

if __name__ == '__main__':
    generate('What is a curve in mathematics?', filename='app/manim_llm_core/manim.py')
