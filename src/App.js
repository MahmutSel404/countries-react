import React from "react";
import "./App.css";
import countryData from "./countryData.json";
import CountryCard from "./CountryCards";


function App() {
  return (
    <div className="App">
      <div className="countries-cards">
        {countryData.map((card) => (
          <CountryCard data={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
