import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";

import List from "./components/list/List.component";
import ChartComponent from "./components/chart/Chart.component";
import CountedSummary from "./components/counted-summary/CountedSummary.component";

import "./App.scss";
// TODO: create routes for pages: all list pages (AllRegionsPage),
//HomePage (containt diagram and sum of all cases). Create function to summ all cases
//

/*

          */
function App() {
  const [coronaData, setCoronaData] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [all, setAll] = useState({
    confirmedAll: null,
    deathsAll: null,
    recoveredAll: null,
    existingAll: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://api-covid19.rnbo.gov.ua/data?to=2021-02-07"
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
            <h1>Loading data...</h1>
          ) : (
            <List coronaData={coronaData} />
          )
        ) : null}
        <div className={`${hidden ? 'blured' : ''} chart-and-summary-container`}>
          <ChartComponent />
          {all.confirmedAll === null ? (
            <>
              <h2>Роблю деякі розрахунки...</h2>
            </>
          ) : (
            <CountedSummary all={all} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
