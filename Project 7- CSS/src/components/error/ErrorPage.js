import { Link } from "react-router-dom";
import "../../style/components/errorpage/errorpage.css"



export default function NoPage() {
  return (
    <>
      <div className="ErrorContainer">
        <p className="Error_number">404</p>
        <p className="Error_text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" style={{textDecoration: "none"}}>
          <p className="HomeLink">Retourner sur la page d'accueil</p>
        </Link>
      </div>
    </>
  );
}