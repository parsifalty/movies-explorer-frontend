import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import useDeviceType from "../Resizer/Resizer";

export default function Footer() {
  const isMobile = useDeviceType();

  return (
    <section className="footer">
      <p className="footer__paragraph">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      {isMobile ? (
        <div className="footer__container">
          <p className="footer__container-item">© 2020</p>
          <p className="footer__container-item">
            {" "}
            <Link to="/" className="footer__link">
              Github
            </Link>
          </p>{" "}
          <p className="footer__container-item">Яндекс.Практикум</p>
        </div>
      ) : (
        <div className="footer__container">
          <p className="footer__container-item">© 2020</p>
          <p className="footer__container-item">Яндекс.Практикум</p>
          <p className="footer__container-item">
            {" "}
            <Link to="/" className="footer__link">
              Github
            </Link>
          </p>{" "}
        </div>
      )}
    </section>
  );
}
