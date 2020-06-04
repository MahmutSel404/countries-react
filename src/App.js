import React, { useState } from "react";
import "./App.css";
import countryData from "./countryData.json";
import CountryCard from "./CountryCards";
import Search from "./Search";

function App() {
  const [search, setSearch] = useState("");
  const filterNames = countryData.filter((entry) =>
    entry.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      <div className="countries-cards">
        {filterNames.map((card) => (
          <CountryCard data={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
