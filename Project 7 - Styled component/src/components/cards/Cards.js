import React from 'react';
import styled from "styled-components";

const StyledCards = styled.div`
  width: 100%;
  height: 255px;
  position: relative;
  margin-bottom: 20px;
  border-radius: 10px;
  animation: fadeInUp 600ms ease-in-out;
  overflow: hidden;

  &:hover {
    > Img {
      transform: scale(1.01);
    }
  }
 

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

`

const Img = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: inherit;
    transform: scale(1);
    transition: transform 300ms;
`

const Title = styled.h2`
    position: absolute;
    bottom: 0;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%;
    margin: 15px 20px;
    color: white;
    box-sizing: inherit;
`
const Over = styled.div`
    position: absolute;
    top: 0;
    
    background: linear-gradient(#FFFFFF00, #000000);
    height: 100%;
    width: 100%;
    border-radius: inherit;
`

function Card({image, title}) {
    return (
      <StyledCards>
        <Img src={image} alt={title}/>
        <Over></Over>

        <Title>{title}</Title>
      </StyledCards>
    );
}

export default Card;