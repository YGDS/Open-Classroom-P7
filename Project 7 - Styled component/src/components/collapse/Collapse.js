import React, { useState } from "react";
import styled from "styled-components"
import Arrow from "../../assets/icone/lil_arrow.png";

const StyledContainer = styled.div`
margin-bottom: 31px;
@media screen and (min-width: 375px) {
  margin-bottom: 20px;
}
`

const StyledDrop = styled.div`
position: relative;
display: flex;
background-color: rgba(255, 96, 96, 1);
height: 30px;
border-radius: 10px;
@media screen and (min-width: 375px){
  height: 47px;
}
`

const StyledBtnUp = styled.img`
  position: absolute;
  margin-right: 10px;
  right: 0px;
  top: 7px;
  height: 18px;
  cursor: pointer;
  @media screen and (min-width: 375px) {
    margin-right: 33px;
    height: 32px;
    right: 0px;
  }
`

const StyledBtnDown = styled.img`
  position: absolute;
  margin-right: 10px;
  right: 0px;
  top: 7px;
  height: 18px;
  transform: rotate(180deg);
  cursor: pointer;
  @media screen and (min-width: 375px) {
    margin-right: 33px;
    height: 32px;
    right: 0px
  }
`

const H2 = styled.h2`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  position: absolute;
  margin-left: 12px;
  top: -5px;
  color: white;

  @media screen and (min-width: 375px) {
    margin-left: 18px;
    font-size: 24px;
    top: -13px;
  }
`

const StyledDroped = styled.div`
background-color: #F6F6F6;
border-radius: 5px;
font-size: 12px;
color: #FF6060;
padding-top: 10px;
margin-top: -15px;
padding-left: 18px;
padding-right: 18px;

@media screen and (min-width: 375px) {
    font-size: 24px;
  }
`

const Para = styled.p`
padding: 27px 18px 19px 18px;
white-space: pre-line;
@media screen and (max-width: 375px) {
  padding: 17px 6px 52px 11px;
  }
`

const Collapse = ({ title, content }) => {

  const isArray = Array.isArray(content);

  const Equip = (Elist = []) =>
    Elist.map(Elist => `${Elist}`).join('\n');


  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledContainer>
      <StyledDrop>
      <H2>{title}</H2>
        
        <p onClick={display}>
          {isOpen ? (
            <StyledBtnUp src={Arrow} alt="icone flèche" />
          ) : (
            <StyledBtnDown src={Arrow} alt="icone flèche" />
          )}
        </p>
      </StyledDrop>
      <StyledDroped>
          {isOpen && !isArray && <Para>{content}</Para>}
          {isOpen && isArray && <Para>{Equip(content)}</Para>}
      </StyledDroped>
    </StyledContainer>

  );
};

export default Collapse;