from unittest import TestCase, main
from app.manim_llm_core.main import create_media, generate
 
class TestMain(TestCase):

    def test_create_media(self):
        result = create_media('app/manim_llm_core/manim.py')
        print(result)
        self.assertIsNotNone(result, 'The result is None.')

    def test_generate(self):
        result = generate('What is a PI?', 'app/manim_llm_core/manim.py')
        print(result)
        self.assertIsInstance(result, str)

if __name__ == '__main__':
    main()
