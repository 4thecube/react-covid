import React from "react";

import "./List.styles.scss";

const List = ({ coronaData }) => {
  const { data } = coronaData;
  console.log(data);
  return (
    <>
      {data === undefined ? null : (
        <div className="open-card">
          <div className="header">
            <div className="header-title">Область</div>
            <div className="header-confirmed">Виявлено</div>
            <div className="header-recovered">Одужало</div>
            <div className="header-existing">Хворіє</div>
            <div className="header-deaths">Померло</div>
          </div>
          <div className="">
            {data.ukraine.map((region) => (
              <div className="regions-container">
                <div className="region-title">{region.label.uk}</div>
                <div className="region-confirmed">{region.confirmed}</div>
                <div className="region-recovered">{region.recovered}</div>
                <div className="region-existing">{region.existing}</div>
                <div className="region-deaths">{region.deaths}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default List;
