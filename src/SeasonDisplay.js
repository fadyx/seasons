import React from "react";

import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const message =
    season === "winter" ? "Burr, it is chilly..." : "Let's hit the beach...";
  const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <div className="main-container">
      <div className={`weather-container ${season}`}>
        <i className={`icon-left massive ${icon} icon`} />
        <div className="content">
          <div className="info">
            <div>Your latitude: {props.lat}.</div>
            <div>Current date is: {new Date().toLocaleDateString()}</div>
            <div>Your current season is: {season}.</div>
            <h1>{message}</h1>
          </div>
        </div>
        <i className={`icon-right massive ${icon} icon`} />
      </div>
    </div>
  );
};

export default SeasonDisplay;
