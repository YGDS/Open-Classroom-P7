import React from "react";
import { Link } from "react-router-dom";
import logements from "../../data/logements.json";
import Card from "../cards/Cards";
import "../../style/components/display/display.css"




const Display = () => {
  return (
    <div className="DisplayContainer">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Display;