import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__container">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://parsifalty.github.io/mesto/"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://parsifalty.github.io/russian-travel/index.html"
            target="_blank"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://parsifalty.github.io/russian-travel/index.html"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}
