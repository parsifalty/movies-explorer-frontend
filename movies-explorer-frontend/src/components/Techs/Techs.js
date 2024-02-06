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
        <ul className="techs__box">
          <li className="techs__box-item">HTML</li>
          <li className="techs__box-item">CSS</li>
          <li className="techs__box-item">JS</li>
          <li className="techs__box-item">React</li>
          <li className="techs__box-item">Git</li>
          <li className="techs__box-item">Express.js</li>
          <li className="techs__box-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
