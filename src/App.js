// src/App.js
import "./App.css";
import JsonCountries from './countries.json';
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import CountriesList from "./components/CountriesList";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import axios from "axios";


function App() {

  const [country, setCountries] = useState(JsonCountries);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then(result => {
        setCountries(result.data)

      })
      .catch(err => { console.log(err) })
  }, [])


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <NavBar />
          <CountriesList data={country} />
          <Routes>
            <Route path="/:countryId" element={<CountryDetails data={country} />} />

          </Routes>
        </div>
      </div>
    </div>
  )
}
export default App;