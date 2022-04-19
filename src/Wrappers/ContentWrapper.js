import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 400px;
  grid-gap: 40px;
  background-color: #f4f4f4;
  max-width: 80%;
  /* border: 1px solid black; */
`;

function ContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default ContentWrapper;
