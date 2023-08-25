import React from "react";
import styled from "styled-components";

const ShortBanner = styled.div`
border-radius: 10px;
height: 111px;
margin-bottom: 35px;
position: relative;
margin-left: 20px;
  margin-right: 20px;
@media screen and (min-width: 760px) {
  height: 223px;
  border-radius: 25px;
  margin-left: 100px;
  margin-right: 100px;
}
`

const TallBanner = styled.div`
border-radius: 10px;
height: 223px;
margin-bottom: 35px;
position: relative;
margin-left: 20px;
  margin-right: 20px;
@media screen and (min-width: 760px) {
  border-radius: 25px;
  margin-left: 100px;
  margin-right: 100px;
}
`

const StyledImg = styled.img`
border-radius: 25px;
height: 100%;
object-fit: cover;
width: 100%;
`

const Text = styled.span`
  position: absolute;
  top: 28.04%;
  left: 5.6%;
  right: 32.53%;
  bottom: 80.05%;
  font-style: Medium;
  font-size: 24px;
  font-weight: 500;
  line-height: 100%;
  color: white;
  width: 217px;
  height: 48px;

  @media screen and (min-width: 375px) {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media screen and (min-width: 760px) {
    font-size: 48px;
  }
`



function Banniere({ image, children}) {

  const isEmpty = !children;


  return (
    <div>
    {!isEmpty && (
      <ShortBanner>
        <StyledImg src={image} alt="Bannière" />
        <Text >{children}</Text>
      </ShortBanner>
    )}
    {isEmpty && (
      <TallBanner>
        <StyledImg src={image} alt="Bannière" />
        <Text >{children}</Text>
      </TallBanner>
    )}
    </div>


  );
}



export default Banniere;