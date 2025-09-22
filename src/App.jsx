import { Suspense, useState } from 'react'
import './App.css'
import Countries from './componets/countries/countries'





const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());
  


function App() {

  return (
    <>
    <Suspense fallback={<h1 className='text-center font-bold text-2xl p-4 m-4'>Nadir vai loading...</h1>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    
    </Suspense>

    </>
  )
}

export default App
