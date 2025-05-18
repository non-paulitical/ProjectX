from manim import *

class WhatIsPi(Scene):
    def construct(self):
        # Title
        title = Text("What is Pi (π)?", font_size=48)
        self.play(Write(title))
        self.wait(1)
        self.play(FadeOut(title))

        # Circle
        circle = Circle(radius=2, color=BLUE)
        self.play(Create(circle))

        # Diameter
        diameter = Line(circle.get_left(), circle.get_right(), color=RED)
        diameter_label = Text("Diameter", font_size=24).next_to(diameter, DOWN)
        self.play(Create(diameter))
        self.play(Write(diameter_label))

        # Circumference
        circumference_label = Text("Circumference", font_size=24).next_to(circle, UP)
        self.play(Write(circumference_label))
        self.wait(1)

        # Pi Definition
        pi_definition = MathTex(r"\pi = \frac{\text{Circumference}}{\text{Diameter}}", font_size=48)
        pi_definition.move_to(DOWN)
        self.play(Write(pi_definition))
        self.wait(2)

        # Show that Circumference = Pi * Diameter
        circumference_equals_pi_diameter = MathTex(r"\text{Circumference} = \pi \times \text{Diameter}", font_size=48)
        circumference_equals_pi_diameter.move_to(DOWN)
        self.play(TransformMatchingTex(pi_definition,circumference_equals_pi_diameter))
        self.wait(2)

        # Numerical Value of Pi
        pi_value = MathTex(r"\pi \approx 3.14159...", font_size=48)
        pi_value.move_to(DOWN + 2*DOWN)
        self.play(Write(pi_value))
        self.wait(2)

        # Visualization of Pi
        # Animate the diameter "wrapping" around the circumference ~3.14 times
        diameter_copy = diameter.copy()
        diameter_copy.set_color(GREEN)
        
        self.play(diameter_copy.animate.move_to(circle.get_right() + RIGHT*0.5).rotate(PI/2, about_point=circle.get_right()))
        self.wait(0.2)

        self.play(diameter_copy.animate.move_to(circle.get_top() + UP*0.5).rotate(PI/2, about_point=circle.get_top()))
        self.wait(0.2)

        self.play(diameter_copy.animate.move_to(circle.get_left() + LEFT*0.5).rotate(PI/2, about_point=circle.get_left()))
        self.wait(0.2)

        remaining_arc = Arc(radius=2, angle=0.14159 * TAU, start_angle=PI/2, color=YELLOW, arc_center=circle.get_center())

        self.play(Create(remaining_arc))
        self.wait(1)


        # Clean up
        self.play(FadeOut(circle, diameter, diameter_label, circumference_label, circumference_equals_pi_diameter, pi_value, diameter_copy, remaining_arc))

        # Conclusion
        conclusion = Text("Pi is the ratio of a circle's circumference to its diameter.", font_size=36)
        self.play(Write(conclusion))
        self.wait(3)
