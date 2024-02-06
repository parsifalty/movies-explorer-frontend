import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import Aboutme from "../AboutMe/AboutMe.js";
import Portfolio from "../Portfolio/Portfolio.js";

export default function Main() {
  return (
    <main className="main">
      {" "}
      <Promo />
      <AboutProject />
      <Techs />
      <Aboutme />
      <Portfolio />
    </main>
  );
}
