import React from "react";
import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__maintitle">Технологии</h2>
        <div className="techs__about">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <div className="techs__box">
          <p className="techs__box__item">HTML</p>
          <p className="techs__box__item">CSS</p>
          <p className="techs__box__item">JS</p>
          <p className="techs__box__item">React</p>
          <p className="techs__box__item">Git</p>
          <p className="techs__box__item">Express.js</p>
          <p className="techs__box__item">mongoDB</p>
        </div>
      </div>
    </section>
  );
}
