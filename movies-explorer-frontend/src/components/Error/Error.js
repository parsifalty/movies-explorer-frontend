import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Error(props) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">Страница не найдена</p>
      <button className="error__button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
  );
}
