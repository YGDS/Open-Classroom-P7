import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;
  @media screen and (min-width: 375px) {
    text-transform: none;
  }
`

const StyledPara = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  text-align: right;
  line-height: 142.6%;
  color: #ff6060;
  text-decoration: none;
  padding-left: 0.8rem;
  @media screen and (min-width: 375px) {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    text-align: right;
    line-height: 142.6%;
    padding-left: 3.5rem;
    }
    &:hover,
    &:focus {
      text-decoration-line: underline;
    }
`

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/" style={{textDecoration: "none"}}>
        <StyledPara>Accueil</StyledPara>
      </Link>
      <Link to="/about" style={{textDecoration: "none"}}>
        <StyledPara>A Propos</StyledPara>
      </Link>
    </StyledNav>
  );
};

export default Nav;