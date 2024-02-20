import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__container">
        <a
          className="portfolio__link"
          target="_blank"
          href="https://parsifalty.github.io/mesto/"
        >
          <li className="portfolio__item">Статичный сайт</li>
        </a>
        <a
          className="portfolio__link"
          href="https://parsifalty.github.io/russian-travel/index.html"
          target="_blank"
        >
          <li className="portfolio__item">Адаптивный сайт </li>
        </a>
        <a
          className="portfolio__link"
          target="_blank"
          href="https://parsifalty.github.io/russian-travel/index.html"
        >
          <li className="portfolio__item">Одностраничное приложение</li>
        </a>
      </ul>
    </section>
  );
}
