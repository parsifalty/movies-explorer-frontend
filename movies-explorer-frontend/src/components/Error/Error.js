import React from "react";
import "./Error.css";

export default function Error() {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">Страница не найдена</p>
      <button className="error__button" type="button">
        <a href="javascript:history.back()" className="error__link">
          Назад
        </a>
      </button>
    </section>
  );
}
