import { useParams, Navigate } from "react-router-dom";
import DataLogement from "../../data/logements.json";
import Carrousel from "./Carrousel";
import Tags from "./Tags";
import Host from "./Host";
import Rate from "./Rating";
import Collapse from "../collapse/Collapse";
import styled from "styled-components";


const StyledContainer = styled.div`
color: white;
flex-direction: column;
margin-bottom: 20px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`

const Profil = styled.div`
margin-left: 6%;

display: flex;
flex-direction: column;
width: 85%;
@media screen  and (min-width: 375px){

  width: 86%;
}

@media screen  and (min-width: 660px){
  flex-direction: row;
  margin-right: 100px;
}

`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: rgba(255, 96, 96, 1);
`

const TitleSpan = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  @media screen and (min-width: 375px) {
    font-size: 36px;
  }
`

const StyledTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  margin-top: 10px;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  @media screen and (min-width: 375px) {
    font-size: 14px;
    margin-top: 20px;
  }
`

const LeftSide = styled.div`
width: 100%;
@media screen and (min-width: 660px){
  width: 80%;
}
`

const RightSide = styled.div`
position: relative;
margin-top: 16px;
width: 100%;
display: flex;
flex-direction: row-reverse;
@media screen and (min-width: 660px){
  margin-top: unset;
  width: 40%;
  flex-direction: column;
}

`

const HostName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

`

const Rating = styled.div`
position: absolute;
left: 0px;
@media screen and (min-width: 660px){
  position: unset;
}
`

const Description = styled.div`
  margin-top: 24px;
  width: 88%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;


  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }


`

const CollapseDescLeft = styled.div`

    margin-right: unset;
    margin-bottom: 10px;
    width: 100%;
  @media screen and (min-width: 700px) {
    width: 50%;
    margin-right: 2%;
    margin-bottom: unset;
  }
`

const CollapseDescRight = styled.div`
    margin: unset;
    width: 100%;
  @media screen and (min-width: 700px) {
    width: 50%;
    margin-left: 2%;
  }
`

const LogementDisplay = () => {
    const { id } = useParams();

    const Logement = DataLogement.find((logement) => logement.id === id);

    const tagsList = Logement?.tags.map((tags) => {
      return <Tags key={tags} nom={tags} />;
    });

    return (
        <>
          {Logement ? (
            <StyledContainer>
                <Carrousel slides={Logement?.pictures}> </Carrousel>
                <Section>
                  <Profil>
                    <LeftSide>
                      <Title>
                        <TitleSpan>
                            {Logement?.title}
                        </TitleSpan>
                        <span>
                          {Logement?.location}
                        </span>
                      </Title>
                      <StyledTagList>
                        {tagsList}
                      </StyledTagList>
                    </LeftSide>
                    <RightSide>
                      <HostName>
                          <Host name={Logement?.host.name} picture={Logement?.host.picture}/>
                      </HostName>
                      <Rating>
                        <Rate score={Logement.rating} />
                      </Rating>
                    </RightSide>
                  </Profil>
                </Section>
                <Description>
                  <CollapseDescLeft>
                    <Collapse title="Description" content={Logement?.description} />
                  </CollapseDescLeft>
                  <CollapseDescRight>
                    <Collapse title="Équipements" content={Logement?.equipments} />
                  </CollapseDescRight>
                </Description>
            </StyledContainer>
          ) : (
            <Navigate to="/404" />
          )}
        </>
      );
};

export default LogementDisplay;