import React from 'react';
import logo from "../../assets/footer/LOGO.png";
import "../../style/components/footer/footer.css";


const Footer = () => {
    return (
      <div className='FooterContainer'>
        <img className='Footer_logo' src={logo} alt="Logo kasa dark mode"/>
        <p className='Footer_text'>
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    );
}

export default Footer;