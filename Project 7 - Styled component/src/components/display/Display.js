import React from "react";
import { Link } from "react-router-dom";
import logements from "../../data/logements.json";
import Card from "../cards/Cards";
import styled from "styled-components";

const StyledDisplay = styled.div`
      margin: 0 20px 0 20px;
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      background-color: #F6F6F6;
      column-gap: 40px;
      row-gap: 20px;
      margin: 40px 100px 0 100px;
    }

    @media only screen and (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 50px;
      row-gap: 30px;
      background:  #f7f7f7;
      padding: 50px;
      border-radius: 25px;
      margin-bottom: 40px;
    }

    @media only screen and (min-width: 1200px) {
      row-gap: 40px;
      column-gap: 60px;
    }
`


const Display = () => {
  return (
    <StyledDisplay>
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </StyledDisplay>
  );
};

export default Display;