import React from "react";
import { Link } from "react-router-dom";
import "../../style/components/nav/nav.css";



const Nav = () => {
  return (
    <nav className="NavContainer">
      <Link to="/" style={{textDecoration: "none"}}>
        <p className="Nav_text">Accueil</p>
      </Link>
      <Link to="/about" style={{textDecoration: "none"}}>
        <p className="Nav_text">A Propos</p>
      </Link>
    </nav>
  );
};

export default Nav;