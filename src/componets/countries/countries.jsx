import React, { use } from 'react'
import Country from '../Country/country';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countrys = countriesData.countries;
    // console.log(countriesData); 

    
  return (
    <div>
      <h1 className="text-2xl font-bold">
        this is a country display app {countrys.length}</h1>
        {
        countrys.map(country => 
        <Country key={country.cca3.cca3} country={country}></Country>)
        }
    </div>
  );
};
export default Countries;