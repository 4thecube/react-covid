import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import getCurrentDate from "./currentDate";

import Map from "./pages/map/Map.page";
import Home from "./pages/home/Home.page";

import "./App.scss";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function App() {
  const [coronaData, setCoronaData] = useState([]);
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

  return (
    <>
      <Route exact path="/">
        <Home all={all} coronaData={coronaData}/>
      </Route>
      <Route exact path="/map">
        <Map coronaData={coronaData} />
      </Route>
    </>
  );
}

export default App;
