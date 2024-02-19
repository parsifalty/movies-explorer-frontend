import React from "react";
import "./Error.css";

export default function Error() {
  function handleClick() {
    window.history.go(-1);
  }

  console.log(window.history);

  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">Страница не найдена</p>
      <button className="error__button" onClick={() => handleClick()}>
        Назад
      </button>
    </section>
  );
}
