import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHandHoldingMedical,
  faHeadSideVirus,
  faCross,
} from "@fortawesome/free-solid-svg-icons";

import "./CountedSummary.styles.scss";
import SummaryCard from "../summary-card/SummaryCard.component";

const CountedSummary = (props) => {
  const { all } = props;
  return (
    <div className="summary-container">
      <div className="summary-box-container">
        <SummaryCard description="Підтверджено" count={all.confirmedAll} />
        <SummaryCard description="Підтверджено" count={all.recoveredAll} />
        <SummaryCard description="Підтверджено" count={all.existingAll} />
        <SummaryCard
          propsClass="summary-deaths"
          description="Підтверджено"
          count={all.deathsAll}
        />
      </div>
    </div>
  );
};


export default CountedSummary;
