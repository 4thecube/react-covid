import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";

import List from "./components/list/List.component";
import ChartComponent from "./components/chart/Chart.component";
import CountedSummary from "./components/counted-summary/CountedSummary.component";
import getCurrentDate from './currentDate';

import "./App.scss";
import Loader from "./components/Loader/Loader.component";

function App() {
  const [coronaData, setCoronaData] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [all, setAll] = useState({
    confirmedAll: null,
    deathsAll: null,
    recoveredAll: null,
    existingAll: null,
  });

  const currentDate = getCurrentDate();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api-covid19.rnbo.gov.ua/data?to=${currentDate}`
      );

      setCoronaData({ data });

      const confirmedAll = data.ukraine.reduce(
        (acc, curr) => acc + curr.confirmed,
        0
      );
      const deathsAll = data.ukraine.reduce(
        (acc, curr) => acc + curr.deaths,
        0
      );
      const recoveredAll = data.ukraine.reduce(
        (acc, curr) => acc + curr.recovered,
        0
      );
      const existingAll = data.ukraine.reduce(
        (acc, curr) => acc + curr.existing,
        0
      );

      setAll({
        confirmedAll,
        deathsAll,
        recoveredAll,
        existingAll,
      });
    };
    fetchData();
  }, []);

  console.log(coronaData);
  return (
    <div className="App">
      <div className="title">
        <h1 className="title-icon">
          <FontAwesomeIcon icon={faVirus} />
        </h1>
        <h1 className="title-text">COVID-19 TRACKER. UKRAINE</h1>
      </div>
      <div onClick={() => setHidden(!hidden)} className="button-container">
        Переглянути по областях
      </div>
      <div className="main-container">
        {hidden ? (
          coronaData.length ? (
            <Loader/>
          ) : (
            <List coronaData={coronaData} />
          )
        ) : null}
        <div className={`${hidden ? 'blured' : ''} chart-and-summary-container`}>
          {all.confirmedAll === null ? (
            <>
              <Loader/>
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
  );
}

export default App;
