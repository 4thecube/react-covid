import React from "react";

import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "mapbox-gl/dist/mapbox-gl.css";

import "./Map.styles.scss";
import Loader from "../Loader/Loader.component";

const Map = ({ coronaData }) => {
  const [viewport, setViewport] = useState({
    width: 1000,
    height: 600,
    latitude: 48.383022,
    longitude: 31.1828699,
    zoom: 5,
  });

  const [showPopup, togglePopup] = useState(false);
  console.log(coronaData);

  return (
    <>
      <ReactMapGL
        mapStyle="mapbox://styles/orzen/ckl6kx0wt5en117tflro7bng6"
        mapboxApiAccessToken="pk.eyJ1Ijoib3J6ZW4iLCJhIjoiY2tsNmtlNThxMXdmMjJvbzRuZmM5Z2xlMSJ9.evazqKiIpbm3w7p31rwMXw"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {coronaData.length < 1 ? (
          <Loader className="map-loader" />
        ) : (
          coronaData.data.ukraine.map((city) => (
            <>
              <Marker key={city.id} latitude={city.lat} longitude={city.lng}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="2x"
                  className="marker"
                  onClick={() =>
                    togglePopup({
                      ...showPopup,
                      [city.id]: true,
                    })
                  }
                />
              </Marker>
              {showPopup[city.id] ? (
                <Popup
                  latitude={city.lat}
                  longitude={city.lng}
                  closeButton={true}
                  closeOnClick={true}
                  onClose={() =>
                    togglePopup({
                      ...showPopup,
                      [city.id]: false,
                    })
                  }
                  anchor="top"
                  className="popup"
                >
                  <div className="popup-info-container">
                    <span className="city">{city.label.uk}</span>
                    <span className="confirmed">
                      Підтверджено: {city.confirmed}
                    </span>
                    <span className="recovered">Одужало: {city.recovered}</span>
                    <span className="existing">Хворіє: {city.existing}</span>
                    <span className="deaths">Померло: {city.existing}</span>
                  </div>
                </Popup>
              ) : null}
            </>
          ))
        )}
      </ReactMapGL>
    </>
  );
};

export default Map;
