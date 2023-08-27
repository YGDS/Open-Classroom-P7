import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import ImgBanner from "../../assets/banner/banner_about.png";
import Collapse from "../../components/collapse/Collapse";
import data_set from "../../data/about.json";
import "../../style/pages/about.css";



const About = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner image={ImgBanner} />
        <div className="AboutContainer">
          <div className="AboutDropDown">
            {data_set.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;