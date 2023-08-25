import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LogementDisplay from "../../components/logement/LogementCard";

const LogementCard = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <LogementDisplay />
      </main>
      <Footer />
    </div>
  );
};

export default LogementCard;