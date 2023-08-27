import React from 'react';
import logo from "../../assets/footer/LOGO.png"
import styled from "styled-components";

const StyledFooter = styled.footer`
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    margin-top: 100px;
    background-color: black;
    flex-direction: column;
    @media screen and (min-width: 375px){
      margin-top: 9%;
    }

`

const Img = styled.img`
width: 122px;
height: 40px;
margin-bottom: 10px;
`

const StyledPara = styled.p`
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%;
    color: white;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

const Footer = () => {
    return (
      <StyledFooter>
        <Img src={logo} alt="Logo kasa dark mode"/>
        <StyledPara>
          © 2020 Kasa. All rights reserved
        </StyledPara>
      </StyledFooter>
    );
}

export default Footer;