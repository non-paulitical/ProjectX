import manim 

class DefaultTemplate(manim.Scene):
    def construct(self):
        circle = manim.Circle()  # create a circle
        circle.set_fill(manim.PINK, opacity=0.5)  # set color and transparency

        square = manim.Square()  # create a square
        square.flip(manim.RIGHT)  # flip horizontally
        # NOTE: TAU the ratio of the circumference to the radius i.e. PI with respect to the, radius
        square.rotate(-3 * manim.TAU / 8)  # rotate a certain amount 

        self.play(manim.Create(square))  # animate the creation of the square
        self.play(manim.Transform(square, circle))  # interpolate the square into the circle
        self.play(manim.FadeOut(square))  # fade out animation
