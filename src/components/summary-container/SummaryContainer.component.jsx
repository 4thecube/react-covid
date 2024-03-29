import React from "react";

import SummaryCard from "../summary-card/SummaryCard.component";

import "./SummaryContainer.styles.scss";

const SummaryContainer = (props) => {
  const { all } = props;
  return (
    <div className="summary-container">
      <div className="summary-box-container">
        <SummaryCard
          propsClass="summary-confirmed"
          description="Підтверджено"
          count={all.confirmedAll}
        />
        <SummaryCard
          propsClass="summary-recovered"
          description="Одужало"
          count={all.recoveredAll}
        />
        <SummaryCard
          propsClass="summary-existing"
          description="Хворіє"
          count={all.existingAll}
        />
        <SummaryCard
          propsClass="summary-deaths"
          description="Померло"
          count={all.deathsAll}
        />
      </div>
    </div>
  );
};

export default SummaryContainer;
