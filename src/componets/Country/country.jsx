import React, { useState } from 'react';
import './country.css'




const Country = ({ country, handleCountryVisitedCount }) => {
  const [visited, setvisited] = useState(false);

  const handleNotVisited = () => {
    // console.log("button clicked");

    // if(!visited){
    //   setvisited(true);
    // }
    // else{
    //   setvisited(false);
    // }

    // another way
    // setvisited(visited? false : true);

    // another way
    setvisited(!visited);
    handleCountryVisitedCount(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3 className='m-2'>Name: {country.name.common}</h3>
      <h4 className='m-2'>Capital: {country.capital.capital}</h4>
      <h4 className='m-2'>Region: {country.region.region}</h4>
      <h4 className='m-2'>Population: {country.population.population}</h4>
      <p className='m-2'>
        Area: {country.area.area}
        {country.area.area > 1000000 ? " (Large)" : " (Small)"}
      </p>
      <button onClick={handleNotVisited} className="not-visited-btn m-2">
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
