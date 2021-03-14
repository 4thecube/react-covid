import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import List from "../../components/list/List.component";
import ChartComponent from "../../components/chart/Chart.component";
import CountedSummary from "../../components/counted-summary/CountedSummary.component";
import Loader from "../../components/Loader/Loader.component";
import { Link } from "react-router-dom";

import "./Home.styles.scss";
import Today from "../../components/today-data/Today.component";

const Home = ({ coronaData, all, coronaDataPerDay }) => {
  const [isHidden, setIsHidden] = useState(true);

  // move the code below to a new component

  return (
    <div className="Home">
      <div className="title">
        <span className="title-icon">
          <FontAwesomeIcon icon={faVirus} />
        </span>
        <span className="title-text">COVID-19 TRACKER. UKRAINE</span>
      </div>
      <Today coronaDataPerDay={coronaDataPerDay} />
      <div className="buttons-container">
        <div
          className="button-container"
          onClick={() => setIsHidden(!isHidden)}
        >
          Переглянути по областях
        </div>
        <Link to="/map" target="_blank" className="button-container">
          Переглянути на карті
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
      </div>
      {isHidden ? null : <List coronaData={coronaData} />}
      <div className="main-container">
        <div className="chart-and-summary-container">
          {all.confirmedAll === null && coronaDataPerDay === undefined ? (
            <>
              <Loader />
            </>
          ) : (
            <>
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
