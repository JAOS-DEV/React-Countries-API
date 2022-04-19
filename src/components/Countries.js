import React, { useContext } from "react";
import { CountriesDataContext } from "../App";
import Card from "./Card/Card";
import ContentWrapper from "../Wrappers/ContentWrapper";

function Countries() {
  const { countriesData } = useContext(CountriesDataContext);
  return (
    <ContentWrapper>
      {countriesData.map((country, index) => (
        // Add onClick to load country page
        <Card key={index} country={country} />
      ))}
    </ContentWrapper>
  );
}

export default Countries;
