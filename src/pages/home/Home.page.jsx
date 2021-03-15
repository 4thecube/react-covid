import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import List from "../../components/list/List.component";
import ChartComponent from "../../components/chart/Chart.component";
import CountedSummary from "../../components/counted-summary/CountedSummary.component";
import Loader from "../../components/Loader/Loader.component";
import Today from "../../components/today-data/Today.component";

import "./Home.styles.scss";
import ParticlesContainer from "../../components/particles/Particles.component";
const Home = ({ coronaData, all, coronaDataPerDay }) => {
  const [isHidden, setIsHidden] = useState(true);
  console.log(isHidden);
  return (
    <div className="home-page">
      <div className="home-page__title">
        <ParticlesContainer />
        <span className="home-page__title-text">COVID-19. Україна</span>
      </div>
      <Today coronaDataPerDay={coronaDataPerDay} />

      <div className="home-page__data-container">
        <div className="buttons-container">
          <div
            className="button-container"
            onClick={() => setIsHidden(!isHidden)}
          >
            Переглянути по областях
          </div>
          <Link
            to="/map"
            target="_blank"
            className="button-container second-button"
          >
            Переглянути на карті
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Link>
        </div>
        <div className="home-page__chart-and-summary-container">
          {all.confirmedAll === null && coronaDataPerDay === undefined ? (
            <Loader />
          ) : (
            <>
              {isHidden ? null : <List coronaData={coronaData} />}
              <ChartComponent coronaDataForChart={coronaDataPerDay} />
              <CountedSummary all={all} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
