from manim import *

class DefaultTemplate(Scene):
    def construct(self):
        circle = Circle()  # create a circle
        circle.set_fill(PINK, opacity=0.5)  # set color and transparency

        square = Square()  # create a square
        # square.flip(RIGHT)  # flip horizontally
        # NOTE: TAU the ratio of the circumference to the radius i.e. PI with respect to the, radius
        # square.rotate(-3 * TAU / 8)  # rotate a certain amount 

        # self.play(Create(square))  # animate the creation of the square
        # self.play(Transform(square, circle))  # interpolate the square into the circle
        circle.set_x(0)
        square.next_to(circle, UP, buff=0.5)
        self.play(Create(circle), Create(square))  # fade out animation


class AnimateSquareToCircle(Scene):
    def construct(self):
        circle = Circle()
        square = Square()

        self.play(Create(square))
        
        # NOTE: animate dynamically shows the animation of settings the properties,
        # instead of creating the Mobject with the set properties
        self.play(square.animate.rotate(PI / 4))
        self.play(Transform(square, circle))
        self.play(square.animate.set_fill(PINK, opacity=0.5))

class DifferentRotation(Scene):
    def construct(self):
        left_square = Square(color=BLUE_E, fill_opacity=0.7).shift(2 * LEFT)
        right_square = Square(color=GREEN, fill_opacity=0.7).shift(2 * RIGHT)

        self.play(
           left_square.animate.rotate(PI), Rotate(right_square, angle=PI), run_time=2
        )
        self.wait()

# NOTE: The difference between Transform(mob1, mob2) and ReplacementTransform(mob1, mob2) is that,
# Transfrom changes mob1 and its attributes/properties to mob2, that is, mob1 becomes mob2. That's,
# why mob1 persists. On the other hand, ReplacementTransform, literally, replaces mob1 with mob2, so 
# mob1 gets exhausted.
class TwoTransforms(Scene):
    def transform(self):
        circle = Circle()
        square = Square()
        triangle = Triangle()
        self.play(Transform(circle, square))
        self.play(Transform(circle, triangle))
        self.play(FadeOut(circle))

    def replacementTransform(self):
        circle = Circle()
        square = Square()
        triangle = Triangle()
        self.play(ReplacementTransform(circle, square))
        self.play(ReplacementTransform(square, triangle))
        self.play(FadeOut(triangle))

    def construct(self):
        self.transform()
        self.wait(1)
        self.replacementTransform()
