import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Countries from "./components/Countries";
import Error from "./components/Error";
import "./styles.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { MainWrapper } from "./Wrappers/MainWrapper";

export const CountriesDataContext = React.createContext();

function App() {
  const [countriesData, setCountriesData] = useState([]);

  const fetchCountries = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
    setCountriesData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <CountriesDataContext.Provider value={{ countriesData, setCountriesData, fetchCountries }}>
      <Router>
        <MainWrapper>
          <Header />
          <SearchBar />
          <Routes>
            <Route exact path="/" element={<Countries />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </MainWrapper>
      </Router>
    </CountriesDataContext.Provider>
  );
}

export default App;
{
  /* <Route path="/:name" element={<Country />} /> */
}
