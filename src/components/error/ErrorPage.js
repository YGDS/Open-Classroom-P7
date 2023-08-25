import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: #ff6060;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 22px 22px;
`

const Number = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%;

  @media screen and (min-width: 375px) {
    font-size: 288px;
    font-style: normal;
    font-weight: 700;
    line-height: 142.6%;
    margin: 0;
  }
`

const TextError = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  @media screen and (min-width: 375px) {
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%;
    margin: 0;
  }
`

const HomeLink = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ff6060;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  @media screen and (min-width: 375px) {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  margin-top: 182px;
  }
  &:hover,
    &:focus {
      text-decoration-line: underline;
    }
`

export default function NoPage() {
  return (
    <>
      <Container>
        <Number>404</Number>
        <TextError>
          Oups! La page que vous demandez n'existe pas.
        </TextError>
        <Link to="/" style={{textDecoration: "none"}}>
          <HomeLink>Retourner sur la page d'accueil</HomeLink>
        </Link>
      </Container>
    </>
  );
}