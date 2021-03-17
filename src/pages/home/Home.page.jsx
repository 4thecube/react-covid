import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faLevelDownAlt,
  faLevelUpAlt,
} from "@fortawesome/free-solid-svg-icons";

import List from "../../components/list/List.component";
import ChartComponent from "../../components/chart/Chart.component";
import SummaryContainer from "../../components/summary-container/SummaryContainer.component";
import Loader from "../../components/Loader/Loader.component";
import Daily from "../../components/today-data/Daily.component";

import "./Home.styles.scss";
import Intro from "../../components/intro/Intro.component";

const Home = ({ coronaData, all, coronaDataPerDay }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="home-page">
      <Intro />
      <Daily coronaDataPerDay={coronaDataPerDay} />
      <div className="home-page__data-container">
        <div className="home-page__chart-and-summary-container">
          {all.confirmedAll === null && coronaDataPerDay === undefined ? (
            <Loader />
          ) : (
            <>
              <ChartComponent coronaDataForChart={coronaDataPerDay} />

              <SummaryContainer all={all} />
              <div className="buttons-container">
                <div
                  className={`${isHidden ? 'hidden' : 'open'} button-container`}
                  onClick={() => setIsHidden(!isHidden)}
                >
                  Переглянути по областях
                  {isHidden ? (
                    <FontAwesomeIcon icon={faLevelDownAlt} />
                  ) : (
                    <FontAwesomeIcon icon={faLevelUpAlt} />
                  )}
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
              {isHidden ? null : <List coronaData={coronaData} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
