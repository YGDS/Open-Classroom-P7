import React from "react";
import "../../style/components/banner/banner.css";


function Banniere({ image, children}) {

  const isEmpty = !children;


  return (
    <div>
    {!isEmpty && (
      <div className="ShortBanner">
        <img className="BannerImg" src={image} alt="Bannière" />
        <span className="BannerSpan" >{children}</span>
      </div>
    )}
    {isEmpty && (
      <div className="TallBanner">
        <img className="BannerImg" src={image} alt="Bannière" />
        <span className="BannerSpan">{children}</span>
      </div>
    )}
    </div>


  );
}

export default Banniere;