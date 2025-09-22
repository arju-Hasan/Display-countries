import React, { use } from "react";
import { useState } from "react";
import Country from "../Country/country";
// import "./country.css";
import "./countries.css";

const Countries = ({ countriesPromise }) => {

   const [visitedCountries, setVisitedCountries] = useState([]);

   const handleCountryVisitedCount = (country) => {
    console.log("handle country visited clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
   //  console.log(visitedCountries.length);
   //  console.log(country);
   };

  const countriesData = use(countriesPromise);
  const countrys = countriesData.countries;
  // console.log(countriesData);

  return (
    <div className="">
      <h1 className="country">
        this is a country display app {countrys.length}
      </h1>
      <h2 className="country">Total country visited: {visitedCountries.length} </h2>
      <li>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </li>
      <div className="countries">
        {countrys.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleCountryVisitedCount={handleCountryVisitedCount}
          ></Country>
        ))}
      </div>
    </div>
  );
};
export default Countries;
