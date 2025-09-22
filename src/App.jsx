import { Suspense, useState } from 'react'
import './App.css'
import Countries from './componets/countries/countries'
import Country from './componets/Country/country'




const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());
  


function App() {

  return (
    <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Countries countriesPromise={countriesPromise}></Countries>
      <Country country={country}></Country>
    </Suspense>

    </>
  )
}

export default App
