import React from "react";
import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Display from "../../components/display/Display";
import logo from "../../assets/banner/banner_bkg.png";
import "../../style/pages/home.css";




const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner image={logo}>  Chez vous, <br/> partout et ailleurs  </ Banner>
        <Display />
      </main>
      <Footer />
    </div>
  );
};

export default Home;