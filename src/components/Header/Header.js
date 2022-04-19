import React from "react";
import { Container, HeaderTitle, StyledHeader, ThemeButton } from "./HeaderStyles";

function Header() {
  // Add toggle theme function here
  return (
    <StyledHeader>
      <Container>
        <HeaderTitle>Where in the world?</HeaderTitle>
        <ThemeButton
          onClick={() => {
            console.log("hello");
          }}
        >
          img Dark Mode
        </ThemeButton>
      </Container>
    </StyledHeader>
  );
}

export default Header;
