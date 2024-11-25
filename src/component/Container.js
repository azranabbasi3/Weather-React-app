import React, { useState } from "react";
import Searchdiv from "./divs/Header";
import "./Container.css";
import Body from "./divs/Body";
import Footer from "./divs/Footer";

export default function Weather() {
  const [location, setlocation] = useState("");
  const [Data, setData] = useState({});
  const [error, setError] = useState("");

  async function searchLocation(location) {
    try {
      const url = `http://api.weatherapi.com/v1/current.json?key=3db0c35c1044433ba8b193436242010&q=${location}&aqi=no`;
      const weather_data = await fetch(url);
      const response = await weather_data.json();
      if (response.error) {
        throw Error("Invalid input");
      }
      setData(response.current);
      setError("");
    } catch (err) {
      setError("Invalid input");
      setData({});
    }
  }

  return (
    <div className="Container">
      <Searchdiv
        setData={setData}
        setError={setError}
        Data={Data}
        location={location}
        setlocation={setlocation}
        searchLocation={searchLocation}
      />
      <p>{error}</p>
      <Body Data={Data} />
      <Footer Data={Data} />
    </div>
  );
}
