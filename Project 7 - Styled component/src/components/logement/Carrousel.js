import React, { useState } from "react";
import styled from "styled-components";
import Arrow from "../../assets/icone/Arrow.png";

const StyledSection = styled.section`
    display: flex;
  position: relative;
  width: 93%;
  height: 255px;
  margin: 2% 100px 0 6%;
  overflow: hidden;
  @media screen and (min-width: 375px) {
    height: 415px;
  }
`

const StyledImg = styled.img`
    object-fit: cover;
    position: absolute;
    width: 93%;
    height: 255px;
    mix-blend-mode: normal;
    border-radius: 10px;
    @media screen and (min-width: 375px) {
      border-radius: 15px;
      height: 415px;
    }
`

const StyledSlider = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  border-radius: 10px;
  transition: opacity ease-in-out 0.6s;

  @media screen and (min-width: 375px) {
    border-radius: 15px;
  }
`

const LeftArrow = styled.img`
  display: flex;
  position: absolute;
  top: 42%;
  left: 2%;
  height: 20px;
  width: 12px;
  z-index: 10;
  cursor: pointer;
  color: red;

  @media screen and (min-width: 375px) {
    width: 47px;
    height: 79px;
    top: 42%;
  }
`

const RightArrow = styled.img`
  display: flex;
  transform: rotate(180deg);
  position: absolute;
  top: 42%;
  right: 10%;
  width: 12px;
  height: 20px;
  z-index: 10;
  cursor: pointer;
  color: red;

  @media screen and (min-width: 375px) {
    width: 47px;
    height: 79px;
    top: 42%;
  }
`

const StyledSpan = styled.span`
display: none;

@media screen and (min-width: 375px) {
  display: block;
  position: absolute;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  color: rgba(255, 255, 255, 1);
  left: 47%;
  top: 87%;

}
`

function Carrousel({ slides }) {

    const [current, setCurrent] = useState(0);
    const LogementLength = slides.length;


    const nextImage = () => {
        setCurrent(current === LogementLength - 1 ? 0 : current + 1);
      };

      const prevImage = () => {
        setCurrent(current === 0 ? LogementLength - 1 : current - 1);
      };

      return (
        <StyledSection>
          {LogementLength > 1 && (
            <LeftArrow  onClick={prevImage} src={Arrow} alt="left Arrow" />
          )}
          {LogementLength > 1 && (
            <RightArrow onClick={nextImage} src={Arrow} alt="left Arrow" />
          )}
          {slides.map((image, index) => {
              return (
                <StyledSlider
                  key={image}
                  style={index === current ? {opacity: "1"} : {opacity: "0"}}
                >
                  <StyledImg src={image} alt="img-appartement" />
                  {LogementLength > 1 && (
                    <StyledSpan>
                      {current + 1}/{LogementLength}
                    </StyledSpan>
                  )}
                </StyledSlider>
              );
            })}
        </StyledSection>
    );
}

export default Carrousel;