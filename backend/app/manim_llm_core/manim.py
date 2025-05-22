from manim import *

class ExplainCurve(Scene):
    def construct(self):
        # Title
        title = Text("What is a Curve in Mathematics?").scale(0.9)
        self.play(Write(title))
        self.wait(2)
        self.play(FadeOut(title))

        # Idea 1: Path of a moving point
        explanation1_title = Text("Idea 1: Path of a moving point").scale(0.7).to_edge(UP)
        self.play(Write(explanation1_title))

        dot = Dot(point=LEFT * 4 + DOWN * 0.5, color=YELLOW)
        path_points = [
            dot.get_center(),
            LEFT * 2 + UP * 1,
            RIGHT * 1 + UP * 0.5,
            RIGHT * 3 + DOWN * 1,
            RIGHT * 4 + UP * 0.5
        ]
        path = VMobject()
        path.set_points_as_corners(path_points)
        path.make_smooth()

        self.play(FadeIn(dot))
        self.play(MoveAlongPath(dot, path, run_time=4, rate_func=linear))
        self.play(Create(path), run_time=2)

        path_text = Text("A curve can be thought of as the path traced by a moving point.").scale(0.6).next_to(path, DOWN)
        self.play(Write(path_text))
        self.wait(3)

        self.play(FadeOut(path), FadeOut(dot), FadeOut(path_text), FadeOut(explanation1_title))

        # Idea 2: Continuous collection of points / A 1-dimensional object
        explanation2_title = Text("Idea 2: A continuous collection of points").scale(0.7).to_edge(UP)
        self.play(Write(explanation2_title))

        # Example 1: Straight line (simplest curve)
        line = Line(LEFT * 4, RIGHT * 4).shift(DOWN * 1)
        line_text = Text("Simplest Curve: A Line").scale(0.6).next_to(line, UP)
        self.play(Create(line))
        self.play(Write(line_text))
        self.wait(2)
        self.play(FadeOut(line), FadeOut(line_text))

        # Example 2: A curved line
        axes = Axes(
            x_range=[-PI, PI, PI/2],
            y_range=[-1.5, 1.5, 0.5],
            x_length=8,
            y_length=4,
            axis_config={"include_numbers": False, "include_ticks": False},
            tips=False
        ).shift(DOWN * 0.5)

        # Define the curve (e.g., sine wave)
        curve_func = lambda x: np.sin(x)
        curve = axes.plot(curve_func, color=BLUE)
        curve_label = axes.get_graph_label(curve, label="y = sin(x)")

        self.play(Create(axes))
        self.play(Create(curve))
        self.play(Write(curve_label))

        curve_text = Text("A more general curve").scale(0.6).next_to(curve, UP)
        self.play(Write(curve_text))
        self.wait(3)

        self.play(FadeOut(axes), FadeOut(curve), FadeOut(curve_label), FadeOut(curve_text), FadeOut(explanation2_title))

        # Idea 3: Can be described by equations (briefly parametric)
        explanation3_title = Text("Idea 3: Described by equations").scale(0.7).to_edge(UP)
        self.play(Write(explanation3_title))

        axes_param = Axes(
            x_range=[-3, 3, 1],
            y_range=[-1, 5, 1],
            x_length=6,
            y_length=6,
            axis_config={"include_numbers": True},
            tips=False
        )
        axes_param.add_coordinates()

        # Parametric equation for a parabola: (t, t^2)
        parametric_func = lambda t: axes_param.c2p(t, t**2)
        param_curve = ParametricFunction(
            parametric_func, t_range=(-2, 2), color=GREEN
        )

        equation_text = MathTex(
            "x(t) = t",
            "y(t) = t^2"
        ).arrange(DOWN).scale(0.8).to_edge(RIGHT)

        self.play(Create(axes_param))
        self.play(Write(equation_text))
        self.wait(1)
        self.play(Create(param_curve))
        self.wait(3)

        self.play(FadeOut(axes_param), FadeOut(param_curve), FadeOut(equation_text), FadeOut(explanation3_title))

        # Summary
        summary_text = Text("In essence, a curve is a 1-dimensional geometric object representing a continuous path.").scale(0.7)
        self.play(Write(summary_text))
        self.wait(4)
