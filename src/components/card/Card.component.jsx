import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faVirus, faHandHoldingMedical, faHeadSideVirus, faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";

import "./Card.styles.scss";

const Card = (props) => {
  const { region, recovered, existing, deaths, confirmed } = props;
  return (
    <div className="card-container">
      <div className="region">
        <FontAwesomeIcon size="2x" icon={faMapMarkerAlt} />
        <span className="region-text">{region}</span>
      </div>
        <div className="card-info">
        <div className="confirmed">
            <FontAwesomeIcon icon={faVirus} size="2x"/>
        <span className="quantity">{confirmed}</span>
        <span className="quantity-text">підтверджених випадків</span>
      </div>
      <div className="recovered">
      <FontAwesomeIcon icon={faHandHoldingMedical} size="2x"/>
        <span className="quantity">{recovered}</span>
        <span className="quantity-text">уже одужали</span>
      </div>
      <div className="existing">
          <FontAwesomeIcon icon={faHeadSideVirus}  size="2x"/>
        <span className="quantity">{existing}</span>
        <span className="quantity-text">зараз хворіють</span>
      </div>
      <div className="deaths">
      <FontAwesomeIcon icon={faSkullCrossbones}  size="2x"/>
        <span className="quantity">{deaths}</span>
        <span className="quantity-text">померли</span>
      </div>
        </div>
    </div>
  );
};

export default Card;
