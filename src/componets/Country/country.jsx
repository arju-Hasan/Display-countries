import React from 'react';
const Country = ({ country }) => {
    return (
      <div className="border-2 m-4 p-4 rounded-lg">
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h3>Name: {country.name.common}</h3>
        <h4>Capital: {country.capital.capital}</h4>
        <h4>Region: {country.region.region}</h4>
        <h4>Population: {country.population.population}</h4>
      </div>
    );
};

export default Country;
