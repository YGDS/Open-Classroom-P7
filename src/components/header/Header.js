import logo from "../../assets/logo/LOGO.png";
import Nav from "../nav/Nav";
import styled from "styled-components";

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px 20px 16px 20px;

@media screen and (min-width: 538px) {
  margin-top: 40px;
  margin-left: 100px;
  margin-right: 100px;
}
`

const StyledLink = styled.figure`
display: flex;
align-items: flex-start;
margin: 0;
width: 9rem;

@media screen and (min-width: 538px) {
  width: 13.2rem;
}
`

const Img = styled.img`
max-width: 145px;
min-width: 100px;
width: 100%;

`


export default function Header() {
  return (
    <StyledHeader>
      <StyledLink>
        <Img src={logo} alt="logo de l'agence kasa" />
      </StyledLink>
      <Nav/>
    </StyledHeader>
  );
}