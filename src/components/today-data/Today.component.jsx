import React from "react";

import "./Today.styles.scss";

const Today = ({ coronaDataPerDay }) => {
  console.log(coronaDataPerDay);
  const confirmed = coronaDataPerDay.confirmed;
  const recovered = coronaDataPerDay.recovered;
  const existing = coronaDataPerDay.existing;
  const deaths = coronaDataPerDay.deaths;
  const dates = coronaDataPerDay.dates;
  const confirmedCount = parseInt(
    confirmed[confirmed.length - 1] - confirmed[confirmed.length - 2]
  );
  const recoveredCount = parseInt(
    recovered[recovered.length - 1] - recovered[recovered.length - 2]
  );
  const existingCount = parseInt(
    existing[existing.length - 1] - existing[existing.length - 2]
  );
  const deathsCount = parseInt(
    deaths[deaths.length - 1] - deaths[deaths.length - 2]
  );
  const forCurrentDate = new Date(dates[dates.length - 1]).toLocaleString(
    "uk-UA",
    {
      day: "numeric",
      month: "long",
    }
  );
  console.log(forCurrentDate);
  return (
    <div className="today-container">
      <div className="today-title">Дані за {forCurrentDate}</div>
      <div className="today-block-container">
        <div className="today-block today-confirmed">
          <span className="today-block-counted">{confirmedCount}</span>
          <span className="today-block-title">Нових випадків за добу</span>
        </div>
        <div className="today-block today-recovered">
          <span className="today-block-counted">{recoveredCount}</span>
          <span className="today-block-title">Одужало</span>
        </div>
        <div className="today-block today-existing">
          <span className="today-block-counted"> {existingCount}</span>
          <span className="today-block-title">Хворіє</span>
        </div>
        <div className="today-block today-deaths">
          <span className="today-block-counted">{deathsCount}</span>
          <span className="today-block-title">Летальних випадків</span>
        </div>
      </div>
    </div>
  );
};

export default Today;
