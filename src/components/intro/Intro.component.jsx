import React from "react";
import ParticlesContainer from "../../components/particles/Particles.component";
import './Intro.styles.scss';
const Intro = () => {
  return (
    <div className="intro">
      <ParticlesContainer />
      <span className="intro__covid-text">COVID-19</span>
      <span className="intro__ukraine-text"> Україна </span>
    </div>
  );
};

export default Intro;
