import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return (
    <FontAwesomeIcon
      icon={faVirus}
      size="5x"
      spin
      style={{
          width: 'inerhit',
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
      }}
    />
  );
};

export default Loader;
