from manim import *

class MultipleSections(Scene):
    def construct(self):
        self.next_section()

        circle = Circle()
        square = Square()
        self.play(Transform(circle, square), run_time = 2)

        self.next_section()

        triangle = Triangle()
        rectangle = Rectangle()
        self.play(Transform(triangle, rectangle), run_time = 2)

class DisplayMobject(Scene):
    def construct(self):
        circle, triangle, square = Circle(), Triangle(), Square()

        circle.shift(LEFT)
        triangle.shift(RIGHT)
        square.shift(UP)

        circle.scale(0.2)
        triangle.scale(0.2)
        square.scale(0.2)
 
        self.add(circle, triangle, square)
        self.wait(1)
