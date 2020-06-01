import React from "react";

const CountryCard = ({ data }) => {
  return (
    <div className="country-card">
      <img className="country-flag" src={data.newFlag} alt="" />
      <div className="countr-info">
        <h1 className="contry-name">{data.name}</h1>
        <h4 className="contry-population">Population: {data.population}</h4>
        <h4 className="contry-region">Region:{data.region}</h4>
        <h4 className="contry-capital">Capital:{data.capital}</h4>
      </div>
    </div>
  );
};

export default CountryCard;
