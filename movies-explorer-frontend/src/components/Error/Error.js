import React from "react";
import "./Error.css";

export default function Error() {
  return (
    <section className="error">
      <h3 className="error__title">404</h3>
      <p className="error__text">Страница не найдена</p>
      <p className="error__span">Назад</p>
    </section>
  );
}
