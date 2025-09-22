import React, { useState } from 'react';
import './country.css'




const Country = ({ country }) => {
  const [visited, setvisited] = useState(false);

const handleNotVisited = () => {
  // console.log("button clicked");
  setvisited(true);
}

    return (
      <div className="country">
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h3>Name: {country.name.common}</h3>
        <h4>Capital: {country.capital.capital}</h4>
        <h4>Region: {country.region.region}</h4>
        <h4>Population: {country.population.population}</h4>
        <p>Area: {country.area.area}{country.area.area > 1000000 ? " (Large)" : " (Small)"}</p>
        <button onClick={handleNotVisited} className='not-visited-btn'>
          { visited ? "Visited" : "Not Visited" }
          </button>
      </div>
    );
};

export default Country;
