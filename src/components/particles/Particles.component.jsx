import React from "react";
import Particles from "react-particles-js";
import coronavirusIcon from "../../assets/coronavirus.png";
import "./Particles.styles.scss";
const ParticlesContainer = () => {
  return (
    <Particles
      className="particles-js"
      params={{
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 18,
          },
          rotate: "true",
          move: {
            speed: 2,
            out_mode: "out",
          },
          shape: {
            type: "image",
            image: [
              {
                src: coronavirusIcon,
              },
            ],
          },
          size: {
            value: 70,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 15,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
};

export default ParticlesContainer;
