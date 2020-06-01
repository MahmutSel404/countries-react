import React from "react";

const CountryCard = ({
  data: { newFlag, name, population, region, capital },
}) => {
  return (
    <div className="country-card">
      <img className="country-flag" src={newFlag} alt="" />
      <div className="country-info">
        <h1>{name}</h1>
        <h4>Population: {population}</h4>
        <h4>Region:{region}</h4>
        <h4>Capital:{capital}</h4>
      </div>
    </div>
  );
};

export default CountryCard;
