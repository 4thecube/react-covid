import React, { useEffect, useState, Suspense, lazy } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import Error from "./pages/404/Error-404";
import Loader from "./components/Loader/Loader.component";

import "./App.scss";

// fucntion that gives current date with corret format for API request
import getCurrentDate from "./currentDate";
// the code below belongs to the Map component 
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// lazy loading components 
const Map = lazy(() => import("./pages/map/Map.page"));
const Home = lazy(() => import("./pages/home/Home.page"));

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
    //FIXME: rename functions to a correct name convention  
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

      // FIXME: this math code need to be replace with data that comes from API and set to coronaDataPerDay
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

  //FIXME: need to conver all classNames to BEM convention, then correct sass files with '&' symbol for better exp
  // also can use mixins and other shit.
  console.log(coronaDataPerDay);
  return (
    <div className="app">
      {coronaDataPerDay.confirmed ? (
        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  all={all}
                  coronaData={coronaDataForCities}
                  coronaDataPerDay={coronaDataPerDay}
                />
              )}
            />
            <Route
              exact
              path="/map"
              render={() => <Map coronaData={coronaDataForCities} />}
            />
            <Route path="*" component={Error} />
          </Switch>
        </Suspense>
      ) : (
        <div className="app__loader">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
