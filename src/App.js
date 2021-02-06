import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from './components/card-list/CardList.component';

import "./App.css";

function App() {
  const [coronaData, setCoronaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get(
        "https://api-covid19.rnbo.gov.ua/data?to=2021-02-05"
      );
      setCoronaData(data);
      console.log(data)
    };
    fetchData();
  }, []);

  console.log(coronaData);
  return (
    <div className="App">
      {coronaData.length <= 1  ? 
      <h2>Loading...</h2>
      :
      <div>
                    <CardList coronaData={coronaData}/>
        {coronaData.ukraine.map(city => {
          return <div>
            <h2>{city.label.uk}</h2>
            <h5>All confirmed cases: {city.confirmed}</h5>
          </div>
        })}
      </div>

    }
    </div>
  );
}

export default App;
