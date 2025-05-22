from unittest import TestCase, main
from app.manim_llm_core.main import createMedia
 
class TestCreateMedia(TestCase):

    def test_create_media(self):
        result = createMedia()
        print(result)
        self.assertIsNotNone(result, 'The result is None.')

if __name__ == '__main__':
    main()
