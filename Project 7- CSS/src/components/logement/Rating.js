import React from 'react';
import Star from "../../assets/icone/star-solid-red.svg";
import "../../style/components/logement/rating.css";



function Rate(props) {
    const score = props.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className='RatingContainer'>
      {notes.map((note) =>
        score >= note ? (
          <img className='FullStar' key={note} src={Star} alt="star"/>
        ) : (
          <img className='EmptyStar' key={note} src={Star} alt="star" />
        )
      )}
    </div>
  );
}

export default Rate;