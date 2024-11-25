import React from "react";
import "./Footer.css";

const Footer = ({Data})=> {
  return (
    <div className="weather-details">
      <div className="humidity">
        <div class="text">
          <span id="humidity">{Data?.humidity || 0}</span>
          <span>%</span>
          <p>Humidity</p>
        </div>
      </div>

      <div className="Wind">
        <div class="text">
          <span id="wind-speed">{Data?.wind_mph   || 0}</span>
          <span>mp/h</span>
          <p>Wind Speed</p>
        </div>
      </div>

      <div className="temp-f">
        <div class="text">
          <p id="temp-f">
            {Data?.temp_f  || 0}<sup>°F</sup>
          </p>
        </div>
      </div>
    </div>
  );
}


export default React.memo(Footer);