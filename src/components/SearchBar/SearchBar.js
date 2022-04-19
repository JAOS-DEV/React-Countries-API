import React, { useContext } from "react";
import { CountriesDataContext } from "../../App";
import { Container } from "./SearchBarStyles";

function SearchBar() {
  const { countriesData, setCountriesData, fetchCountries } = useContext(CountriesDataContext);

  const regionData = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleSearch = (e) => {
    const value = e.target.value.toUpperCase();
    let searchTerm = "";
    searchTerm += value;

    if (searchTerm.length >= 3) {
      let output = [];
      countriesData.forEach((country) => {
        const countryName = country.name.official.toUpperCase();
        if (countryName.includes(searchTerm)) {
          output.push(country);
        }
      });
      setCountriesData(output);
      console.log(output);
    } else {
      fetchCountries();
    }
  };

  const handleClear = (e) => {
    const value = e.target.value;
    if (!value.length) {
      console.log("clear");
    }
  };

  return (
    <Container>
      <input type="search" placeholder="Search for country..." onChange={handleClear} onKeyUp={handleSearch} />
      <select name="countries" id="countries">
        <option style={{ display: "none" }}>Filter by Region</option>
        {regionData.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default SearchBar;
