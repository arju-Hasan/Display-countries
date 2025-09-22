import React from 'react';
const Country = ({ country }) => {
    return (
        <div>
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
        </div>
    );
};

export default Country;
