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
      <div className="summary-box confirmed">
        <h3>
          <FontAwesomeIcon icon={faUsers} />
          <span className="text-icon"> Підтверджено:</span>
        </h3>
        <div className="counted">
          <h3> {all.confirmedAll}</h3>
        </div>
      </div>
      <div className="summary-box recovered">
        <h3>
          <FontAwesomeIcon icon={faHandHoldingMedical} />
          <span className="text-icon">Одужало:</span>
        </h3>
        <div className="counted">
          <h3> {all.recoveredAll}</h3>
        </div>
      </div>
      <div className="summary-box existing">
        <h3>
          <FontAwesomeIcon icon={faHeadSideVirus} />
          <span className="text-icon">Хворіє:</span>
        </h3>
        <div className="counted">
          <h3> {all.existingAll}</h3>
        </div>
      </div>
      <div className="summary-box deaths">
        <h3>
          <FontAwesomeIcon icon={faCross} />
          <span className="text-icon">Померло:</span>
        </h3>
        <div className="counted">
          <h3> {all.deathsAll}</h3>
        </div>
      </div>
    </div>
  );
};

export default CountedSummary;
