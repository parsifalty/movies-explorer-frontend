import React from "react";
import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__paragraph">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <p className="promo__button">
          <a className="promo__link" href="#about">
            Узнать больше
          </a>
        </p>
      </div>
    </section>
  );
}
