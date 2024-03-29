import React from "react";
import Loader from "../Loader/Loader.component";

import "./List.styles.scss";

const List = ({ coronaData }) => {
  const { data } = coronaData;
  return (
    <div className="list-of-cities">
      {data.ukraine ? (
        data.ukraine.map((region) => (
          <div key={region.id} className="city-card">
            <span className="region-title">{region.label.uk}</span>
            <span className="region-confirmed">
              {region.confirmed} підтверджених випадків
            </span>
            <span className="region-recovered">{region.recovered} одужало</span>
            <span className="region-existing">{region.existing} хворіє</span>
            <span className="region-deaths">{region.deaths} померло</span>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default List;
