import React from 'react';
import styled from "styled-components";

const HostName = styled.span`
    font-size: 12px;
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%;
    margin-right: 10px;
    text-align: right;
    width: 80px;
    color: #FF6060;

    @media screen and (min-width: 375px){
      font-size: 18px;
    }
`

const Img = styled.img`
width: 32px;
height: 32px;
flex-shrink: 0;
border-radius: 90px;
margin-left: 10px;
@media screen and (min-width: 375px){
  width: 64px;
  height: 64px;
}
`

function Host(props) {
    return (
      <>
        <HostName>{props.name}</HostName>
        <Img
          src={props.picture}
          alt="Propriétaire"
        />
      </>
    );
}

export default Host;