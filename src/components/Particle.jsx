import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // ✅ lightweight + works with v3+

function Particle() {
  // Load only necessary features for performance and version safety
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 2 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          number: {
            value: 120,
            density: { enable: true, area: 1000 },
          },
          color: { value: "#c084f5" },
          links: { enable: false },
          move: {
            direction: "right",
            enable: true,
            speed: 0.3,
            outModes: { default: "out" },
          },
          opacity: {
            value: 0.2,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.05 },
          },
          shape: { type: "circle" },
          size: { value: { min: 0.5, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;


