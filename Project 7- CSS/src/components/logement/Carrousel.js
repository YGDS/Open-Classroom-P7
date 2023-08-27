import React, { useState } from "react";
import Arrow from "../../assets/icone/Arrow.png";
import "../../style/components/logement/carrousel.css"



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
        <section className="CarrouselContainer">
          {LogementLength > 1 && (
            <img className="LeftArrow"  onClick={prevImage} src={Arrow} alt="left Arrow" />
          )}
          {LogementLength > 1 && (
            <img className="RightArrow" onClick={nextImage} src={Arrow} alt="left Arrow" />
          )}
          {slides.map((image, index) => {
              return (
                <div className="Carrousel_slider"
                  key={image}
                  style={index === current ? {opacity: "1"} : {opacity: "0"}}
                >
                  <img className="Carrousel_picture" src={image} alt="img-appartement" />
                  {LogementLength > 1 && (
                    <span className="Picture_slot">
                      {current + 1}/{LogementLength}
                    </span>
                  )}
                </div>
              );
            })}
        </section>
    );
}

export default Carrousel;