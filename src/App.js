import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import getCurrentDate from "./currentDate";

import Map from "./pages/map/Map.page";
import Home from "./pages/home/Home.page";

import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import Error from "./pages/404/Error-404";
import Loader from "./components/Loader/Loader.component";
import List from "./pages/list/List.component";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

function App() {
  const [coronaDataForCities, setCoronaDataForCities] = useState([]);
  const [coronaDataPerDay, setCoronaDataPerDay] = useState({});
  const [all, setAll] = useState({
    confirmedAll: null,
    deathsAll: null,
    recoveredAll: null,
    existingAll: null,
  });

  const currentDate = getCurrentDate();

  useEffect(() => {
    const res = async () => {
      const { data } = await axios.get(
        "https://api-covid19.rnbo.gov.ua/charts/main-data?mode=ukraine"
      );
      setCoronaDataPerDay(data);
    };
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api-covid19.rnbo.gov.ua/data?to=${currentDate}`
      );
      setCoronaDataForCities({ data });

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
    res();
  }, []);

  return (
    <div className="app">
      {coronaDataPerDay.confirmed ? (
        <Switch>
          <Route exact path="/">
            <Home
              all={all}
              coronaData={coronaDataForCities}
              coronaDataPerDay={coronaDataPerDay}
            />
          </Route>
          <Route exact path="/list">
            <List coronaData={coronaDataForCities} />
          </Route>
          <Route exact path="/map">
            <Map coronaData={coronaDataForCities} />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      ) : (
        <div className="app__loader">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
