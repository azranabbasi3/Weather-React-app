import React from "react";
import "./Body.css";
export default function Body({Data}) {
  return (
    <div className="weather-body">
      <div className="Weather-img">
        <img src="/pics/default.png" alt="WeatherImage" />
      </div>
      <div className="weather-box">
        <p className="temperature">{Data?.temp_c || 0}<sup>°C</sup>
        </p>
        <p className="description">{Data?.condition?.text  || "description"}</p>
      </div>
    </div>
  );
}
