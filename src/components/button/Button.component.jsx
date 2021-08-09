import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faExternalLinkAlt,
    faLevelDownAlt,
    faLevelUpAlt,
  } from "@fortawesome/free-solid-svg-icons";

  import './Button.styles.scss';

const Button = ({handleIsHiddenlick, isHidden, title}) => {
    return (
        <div
        className={`${isHidden ? 'hidden' : 'open'} button-container`}
        onClick={handleIsHiddenlick}
      >
        {title}
        {isHidden ? (
          <FontAwesomeIcon icon={faLevelDownAlt} />
        ) : (
          <FontAwesomeIcon icon={faLevelUpAlt} />
        )}
      </div>
    )
}

export default Button
