from manim import *

class WhatIsAMatrix(Scene):
    def construct(self):
        # Title
        title = Text("What is a Matrix?").scale(1.2)
        self.play(Write(title))
        self.wait(1)

        # Definition
        definition = Text("A rectangular array of numbers").next_to(title, DOWN, buff=1)
        self.play(FadeOut(title), Write(definition))
        self.wait(1.5)

        # Example Matrix
        matrix_array = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]
        matrix_mob = Matrix(matrix_array).scale(0.8)
        self.play(FadeOut(definition), Create(matrix_mob))
        self.wait(1)

        # Identify elements
        element_text = Text("Elements").next_to(matrix_mob, DOWN, buff=0.5)
        self.play(Write(element_text))
        self.play(Indicate(matrix_mob.get_entries()))
        self.wait(1)
        self.play(FadeOut(element_text))

        # Identify rows
        rows_text = Text("Rows").next_to(matrix_mob, LEFT, buff=1)
        row1_brace = Brace(matrix_mob.get_rows()[0], LEFT)
        row2_brace = Brace(matrix_mob.get_rows()[1], LEFT)
        row3_brace = Brace(matrix_mob.get_rows()[2], LEFT)
        row1_text = row1_brace.get_text("Row 1")
        row2_text = row2_brace.get_text("Row 2")
        row3_text = row3_brace.get_text("Row 3")

        self.play(Write(rows_text))
        self.play(Create(row1_brace), Write(row1_text))
        self.wait(0.5)
        self.play(Create(row2_brace), Write(row2_text))
        self.wait(0.5)
        self.play(Create(row3_brace), Write(row3_text))
        self.wait(1)
        self.play(
            FadeOut(rows_text),
            FadeOut(row1_brace), FadeOut(row1_text),
            FadeOut(row2_brace), FadeOut(row2_text),
            FadeOut(row3_brace), FadeOut(row3_text)
        )

        # Identify columns
        cols_text = Text("Columns").next_to(matrix_mob, UP, buff=1)
        col1_brace = Brace(matrix_mob.get_columns()[0], UP)
        col2_brace = Brace(matrix_mob.get_columns()[1], UP)
        col3_brace = Brace(matrix_mob.get_columns()[2], UP)
        col1_text = col1_brace.get_text("Col 1")
        col2_text = col2_brace.get_text("Col 2")
        col3_text = col3_brace.get_text("Col 3")

        self.play(Write(cols_text))
        self.play(Create(col1_brace), Write(col1_text))
        self.wait(0.5)
        self.play(Create(col2_brace), Write(col2_text))
        self.wait(0.5)
        self.play(Create(col3_brace), Write(col3_text))
        self.wait(1)
        self.play(
            FadeOut(cols_text),
            FadeOut(col1_brace), FadeOut(col1_text),
            FadeOut(col2_brace), FadeOut(col2_text),
            FadeOut(col3_brace), FadeOut(col3_text)
        )

        # Show dimensions
        dimensions_text = Text("Dimensions: rows x columns").next_to(matrix_mob, DOWN, buff=0.5)
        self.play(Write(dimensions_text))
        self.wait(1)

        dimensions_value = Text("3 x 3").next_to(dimensions_text, DOWN)
        self.play(Write(dimensions_value))
        self.wait(2)

        self.play(FadeOut(dimensions_text), FadeOut(dimensions_value))

        # Brief mention of use
        use_text = Text("Used to organize data or represent transformations").next_to(matrix_mob, DOWN, buff=0.5)
        self.play(Write(use_text))
        self.wait(2.5)

        # End scene
        self.play(FadeOut(matrix_mob), FadeOut(use_text))
        thanks = Text("That's a Matrix!").scale(1.2)
        self.play(Write(thanks))