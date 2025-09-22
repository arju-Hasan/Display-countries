import React, { use } from 'react'
const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const country = countriesData.countries;
    // console.log(countriesData); 

    
  return (
    <div>
      <h1 className="text-2xl font-bold">this is a country display app {country.length}</h1>
    </div>
  );
};
export default Countries;