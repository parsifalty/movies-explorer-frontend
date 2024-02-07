import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import Aboutme from "../AboutMe/AboutMe.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

export default function Main(props) {
  return (
    <>
      <Header isLogged={props.isLogged} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <Aboutme />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
