import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <p className="footer__paragraph">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__container-item">© 2020</p>
        <p className="footer__container-item">Яндекс.Практикум</p>
        <p className="footer__container-item">
          {" "}
          <Link to="/" className="footer__link">
            Github
          </Link>
        </p>
      </div>
    </section>
  );
}
