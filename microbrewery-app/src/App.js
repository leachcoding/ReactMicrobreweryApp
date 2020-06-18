import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeerList from "./components/BeerList.js";
import BeerCard from "./components/BeerCard.js";
import Axios from "axios";

function App() {
  const [beers, setBeers] = useState([])
  const [value, setValue] = useState('dog')

  useEffect(() => {
    const fetchData = () => {
      Axios.get(
        `https://api.openbrewerydb.org/breweries/search?query=${value}`
      ).then((res) => {
        console.log(res.data);
        setBeers(res.data)
      })
      .catch(err => {
        console.log(err, "this did not work")
      })
    };
    fetchData()
  }, []);

  return (
    <div className="BeerApp">
      
      <BeerList beers={beers}/>
      
    </div>
  );
}

export default App;
