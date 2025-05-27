from manim import *

class QuantumTunneling(Scene):
    def construct(self):
        # Setup the scene with axes
        axes = Axes(
            x_range=[-5, 5, 1],
            y_range=[-0.5, 1, 0.5], # Y range kept small as particle moves along a line
            x_length=10,
            y_length=1.5,
            axis_config={"include_numbers": True},
            tips=False,
        )
        axes.remove(axes.get_y_axis()) # Remove y-axis for simplicity, focusing on position (x)

        x_label = axes.get_x_axis_label("Position (x)")
        plot_group = VGroup(axes, x_label)

        # Potential Barrier
        barrier_width = 1.0
        barrier_height = 2.0 # Visual height of the barrier
        barrier_center_x = 0.0
        barrier = Rectangle(
            width=barrier_width,
            height=barrier_height,
            color=BLUE,
            fill_opacity=0.7
        )
        # Position the barrier centered at x=0, sitting on the x-axis line (y=0)
        barrier.move_to(axes.c2p(barrier_center_x, 0) + UP * barrier_height/2)

        barrier_label = Text("Potential Barrier", font_size=24).next_to(barrier, UP)

        # Particle
        initial_particle_x = -4.0
        particle = Dot(axes.c2p(initial_particle_x, 0), color=YELLOW) # Particle moves along the x-axis (y=0)
        particle_label = Text("Particle", font_size=24).next_to(particle, DOWN)

        # Display initial state
        self.play(Create(plot_group), Create(barrier), Write(barrier_label))
        self.play(Create(particle), Write(particle_label))
        self.wait(1)

        # --- Classical Expectation ---
        classical_text = Text("Classical Physics: Reflection", font_size=30).to_edge(UP)

        # Animate particle approaching the barrier classically
        classical_approach_end_x = axes.c2p(barrier_center_x - barrier_width/2, 0)[0] # Stop just before the barrier
        self.play(
            particle.animate.set_x(classical_approach_end_x),
            run_time=2
        )
        self.play(Write(classical_text))

        # Animate classical reflection
        classical_reflection_end_x = axes.c2p(initial_particle_x + 1, 0)[0] # Reflect back a bit
        self.play(
             particle.animate.set_x(classical_reflection_end_x),
             run_time=1
        )

        # Clean up classical elements and reset particle position
        self.play(FadeOut(classical_text))
        self.play(
             particle.animate.move_to(axes.c2p(initial_particle_x, 0)) # Reset particle to start
        )
        self.wait(1)

        # --- Quantum Tunneling ---
        quantum_text = Text("Quantum Tunneling", font_size=36).to_edge(UP)
        explanation1 = Text(
            "In Quantum Mechanics, the particle\nhas a probability of tunneling through.",
            font_size=24
        ).next_to(quantum_text, DOWN)
        explanation2 = Text(
            "The particle's wave function\ndecays inside the barrier...",
            font_size=24
        ).next_to(explanation1, DOWN).shift(DOWN*0.5)
        explanation3 = Text(
            "...but is non-zero on the other side,\nallowing a chance of detection there.",
            font_size=24
        ).next_to(explanation2, DOWN)

        # Display quantum explanation text
        self.play(Write(quantum_text))
        self.play(Write(explanation1))
        self.wait(2)

        # Animate quantum tunneling - particle passes through the barrier
        tunnel_end_x = axes.c2p(4.0, 0)[0] # Move to x=4.0 (past the barrier)
        self.play(
             particle.animate.set_x(tunnel_end_x),
             run_time=3 # Slower run_time to emphasize passing through
        )
        self.wait(1)

        # Display explanation text about the wave function and probability
        self.play(Write(explanation2))
        self.wait(2)
        self.play(Write(explanation3))
        self.wait(3)

        # Clean up all elements
        self.play(FadeOut(VGroup(particle, particle_label, quantum_text, explanation1, explanation2, explanation3)))
        self.play(FadeOut(VGroup(axes, barrier, barrier_label)))