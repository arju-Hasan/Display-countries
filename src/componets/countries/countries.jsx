import React, { use } from "react";
import Country from "../Country/country";
// import "./country.css";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countrys = countriesData.countries;
  // console.log(countriesData);

  return (
    <div className="">
      <h1 className="country">
        this is a country display app {countrys.length}
      </h1>
      <div className="countries">
        {
        countrys.map((country) => (<Country key={country.cca3.cca3} country={country}></Country>))
        }
      </div>
    </div>
  );
};
export default Countries;
