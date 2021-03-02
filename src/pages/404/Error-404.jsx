import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faVirus } from "@fortawesome/free-solid-svg-icons";

import "./Error-404.styles.scss";

const Error = () => {
  return (
    <div className="error-404">
      <Link to="/" className="error-404__gohome">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="gohome__text">вернутись назад</span>
      </Link>
      <div>
        <FontAwesomeIcon icon={faVirus} size="5x" />
      </div>
      <span className="error-404__code">404</span>
      <h1 className="error-404__title">
        Вітаю, <span className="title__badword">бл##ь</span>, ти заблукав!
      </h1>
      <h3>
        Ще раз так зробиш - получиш коронавірус. А тепер або вертайся тхаті, або
        закривай се всьо!
      </h3>
    </div>
  );
};

export default Error;
