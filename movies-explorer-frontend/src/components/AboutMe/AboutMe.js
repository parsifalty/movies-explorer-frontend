import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__info">
        <div className="aboutme__container">
          <h3 className="aboutme__container-title">Виталий</h3>
          <p className="aboutme__container-info">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="aboutme__container-paragraph">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <p className="aboutme__container-link">
            <a
              className="aboutme__link"
              href="https://www.w3schools.com"
              target="_blank"
            >
              Github
            </a>
          </p>
        </div>
        <img
          className="aboutme__image"
          alt="фото студента"
          src={require("../images/student.png")}
        ></img>
      </div>
    </section>
  );
}
