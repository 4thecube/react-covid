import React from "react";
import PropTypes from "prop-types";

import "./SummaryCard.styles.scss";

const SummaryCard = ({ description, count, propsClass }) => {
  return (
    <div className={`${propsClass} summary-box`}>
      <span className="summary-counted">{count}</span>
      <span className="summary-description">{description}</span>
    </div>
  );
};

SummaryCard.propTypes = {
  propsClass: PropTypes.string,
};

SummaryCard.defaultProps = {
  propsClass: "",
};

export default SummaryCard;
