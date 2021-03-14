import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHandHoldingMedical,
  faHeadSideVirus,
  faCross,
} from "@fortawesome/free-solid-svg-icons";

import "./CountedSummary.styles.scss";

const CountedSummary = (props) => {
  const { all } = props;
  return (
    <div className="summary-container">
      <div className="summary-box-container">
        <div className="summary-box summary-confirmed">
          <span className="summary-counted">{all.confirmedAll}</span>
          <span className="summary-description"> Підтверджено</span>
        </div>
        <div className="summary-box summary-recovered">
          <span className="summary-counted">{all.recoveredAll}</span>
          <span className="summary-description">Одужало</span>
        </div>
        <div className="summary-box summary-existing">
          <span className="summary-counted">{all.existingAll}</span>
          <span className="summary-description">Хворіє</span>
        </div>
        <div className="summary-box summary-deaths">
          <span className="summary-counted">{all.deathsAll}</span>
          <span className="summary-description">Померло</span>
        </div>
      </div>
    </div>
  );
};

export default CountedSummary;
