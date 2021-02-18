import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import List from "../../components/list/List.component";
import ChartComponent from "../../components/chart/Chart.component";
import CountedSummary from "../../components/counted-summary/CountedSummary.component";
import Loader from "../../components/Loader/Loader.component";
import { Link } from "react-router-dom";

import './Home.styles.scss';

const Home = ({coronaData, all}) => {
    const [hidden, setHidden] = useState(true);
    return (
        <div className="Home">
          <div className="title">
            <h1 className="title-icon">
              <FontAwesomeIcon icon={faVirus} />
            </h1>
            <h1 className="title-text">COVID-19 TRACKER. UKRAINE</h1>
          </div>
          <div className="buttons-container">
            <div
              onClick={() => setHidden(!hidden)}
              className={`${hidden ? "" : "active"} button-container`}
            >
              Переглянути по областях
            </div>
            <Link to="/map" target="_blank" className="button-container">
              Переглянути на карті
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </Link>
          </div>
          <div className="main-container">
            {hidden ? null : <List coronaData={coronaData} />}
            <div
              className={`${
                hidden ? "" : "blured"
              } chart-and-summary-container`}
            >
              {all.confirmedAll === null ? (
                <>
                  <Loader />
                </>
              ) : (
                <>
                  <ChartComponent />
                  <CountedSummary all={all} />
                </>
              )}
            </div>
          </div>
        </div>
    )
}

export default Home
