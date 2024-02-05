import react from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <div className="portfolio__container">
        <p className="portfolio__item">Статичный сайт</p>
        <p className="portfolio__item">Адаптивный сайт</p>
        <p className="portfolio__item">Одностраничное приложение</p>
      </div>
    </section>
  );
}
