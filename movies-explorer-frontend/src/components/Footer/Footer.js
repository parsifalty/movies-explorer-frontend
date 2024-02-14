import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import useDeviceType from "../Resizer/Resizer";

export default function Footer() {
  const isMobile = useDeviceType();

  return (
    <footer className="footer">
      <p className="footer__paragraph">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      {isMobile.isMobile ? (
        <div className="footer__container">
          <p className="footer__container-item">© 2020</p>
          <p className="footer__container-item">
            <a
              href="https://github.com/parsifalty"
              target="_blank"
              className="footer__link"
            >
              Github
            </a>
          </p>{" "}
          <p className="footer__container-item">Яндекс.Практикум</p>
        </div>
      ) : (
        <div className="footer__container">
          <p className="footer__container-item">© 2020</p>
          <p className="footer__container-item">Яндекс.Практикум</p>
          <p className="footer__container-item">
            <a
              href="https://github.com/parsifalty"
              className="footer__link"
              target="_blank"
            >
              Github
            </a>
          </p>
        </div>
      )}
    </footer>
  );
}
