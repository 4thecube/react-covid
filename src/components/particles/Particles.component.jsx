import React from "react";
import Particles from "react-particles-js";
import coronavirusIcon from "../../assets/coronavirus.png";
import "./Particles.styles.scss";
const ParticlesContainer = () => {
  return (
    <Particles
      className="particles-js"
      params={{
        particles: {
          number: {
            value: 18,
          },
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
