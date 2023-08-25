import React from 'react';
import styled from "styled-components";
import Star from "../../assets/icone/star-solid-red.svg";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
`

const FullStars = styled.img`
height: 15px;
width: 15px;
margin-left: 5px;
filter: invert(58%) sepia(46%) saturate(5054%) hue-rotate(326deg) brightness(105%) contrast(100%);
@media screen and (min-width: 375px) {
        width: 30px;
        height: 30px;
    }
`

const EmptyStars = styled.img`
height: 15px;
width: 15px;
margin-left: 5px;
filter: invert(87%) sepia(10%) saturate(2%) hue-rotate(314deg) brightness(88%) contrast(95%);
@media screen and (min-width: 375px) {
        width: 30px;
        height: 30px;
    }
`

function Rate(props) {
    const score = props.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <Container>
      {notes.map((note) =>
        score >= note ? (
          <FullStars
            key={note}
            src={Star}
            alt="star"
          />
        ) : (
          <EmptyStars
            key={note}
            src={Star}
            alt="star"
          />
        )
      )}
    </Container>
  );
}

export default Rate;