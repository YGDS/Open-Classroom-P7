import React from 'react';
import "../../style/components/cards/Cards.css"



function Card({image, title}) {
    return (
      <div className="LogementCard">
        <img className="LogementCard_img" src={image} alt={title}/>
        <div className='Overlay'>
        </div>

        <h2 className='LogementCard_name'>{title}</h2>
      </div>
    );
}

export default Card;