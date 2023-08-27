import React from "react";
import styled from "styled-components";

const TagsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
margin-bottom: 5px;
width: 84px;
height: 18px;
flex-shrink: 0;
border-radius: 10px;
background-color: rgba(255, 96, 96, 1);

@media screen and (min-width: 375px) {
    width: 150px;
    height: 25px;
    padding-bottom: unset;
}
`

const TagSpan = styled.span`
color: #FFF;
text-align: center;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: 142.6%;

@media screen and (min-width: 375px) {

    font-size: 14px;
}
`

function Tags({ nom }) {
  return (
    <TagsContainer>
      <TagSpan>{nom}</TagSpan>
    </TagsContainer>
  );
}

export default Tags;