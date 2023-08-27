import logo from "../../assets/logo/LOGO.png";
import Nav from "../nav/Nav";
import "../../style/components/header/header.css"


export default function Header() {
  return (
    <div className="HeaderContainer">
      <div className="LogoContainer">
        <img className="Kasa_logo" src={logo} alt="logo de l'agence kasa" />
      </div>
      <Nav/>
    </div>
  );
}