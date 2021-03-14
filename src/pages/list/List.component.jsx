import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLevelUpAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./List.styles.scss";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader.component";

const List = ({ coronaData }) => {
  const { data } = coronaData;
  console.log(data.ukraine);
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
