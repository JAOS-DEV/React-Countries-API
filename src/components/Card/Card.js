import React from "react";
import { StyledCard, CardImg, CountryName, CountryInfo, InfoCountainer } from "./CardStyles";

function Card({ country }) {
  return (
    <StyledCard>
      <CardImg src={country.flags.png} alt="Flag_Image" />
      <InfoCountainer>
        <CountryName>{country.name.official}</CountryName>
        <CountryInfo>
          <strong>Population: </strong>
          {country.population}
        </CountryInfo>
        <CountryInfo>
          <strong>Region: </strong>
          {country.region}
        </CountryInfo>
        <CountryInfo>
          <strong>Capital: </strong> {country.capital}
        </CountryInfo>
      </InfoCountainer>
    </StyledCard>
  );
}

export default Card;
