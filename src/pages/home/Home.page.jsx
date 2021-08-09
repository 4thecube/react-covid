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
import Map from '../map/Map.page'
import Button from '../../components/button/Button.component'

import "./Home.styles.scss";
import Intro from "../../components/intro/Intro.component";

const Home = ({ coronaData, all, coronaDataPerDay }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isMapHidden, setIsMapHidden] = useState(true);

  const handleIsMapHidden = () => {
    setIsMapHidden(!isMapHidden)
  }

  const handleIsHidden = () => {
    setIsHidden(!isHidden)
  }

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
                <Button title={'Переглянути на карті'} handleIsHiddenlick={handleIsMapHidden} isHidden= {isMapHidden} />
                <Button title={'Переглянути по областях'} handleIsHiddenlick={handleIsHidden} isHidden= {isHidden} />
              </div>
              {
                isMapHidden ? null : <div className="map-on-main"><Map coronaData={coronaData} /></div>
              }
              {isHidden ? null : <List coronaData={coronaData} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
