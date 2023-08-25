import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import ImgBanner from "../../assets/banner/banner_about.png";
import Collapse from "../../components/collapse/Collapse";
import styled from "styled-components";
import data_set from "../../data/about.json";

const StledAbout = styled.div`
    display: flex;
    width: 100%;
    margin: 20px 0;
    justify-content: center;
    align-items: center;
`

const StyledDrop = styled.div`
    justify-content: center;
    align-items: center;
    width: 90%;

    @media screen and (min-width: 375px) {
      width: 80%;
    }
`

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={ImgBanner} />
        <StledAbout>
          <StyledDrop>
            {data_set.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </StyledDrop>
        </StledAbout>
      </main>
      <Footer />
    </div>
  );
};

export default About;