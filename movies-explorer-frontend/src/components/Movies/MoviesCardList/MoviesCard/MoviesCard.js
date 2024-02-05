import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

export default function MoviesCard() {
  const location = useLocation();
  const pathname = location.pathname === "/saved-movies";

  return (
    <div className="moviesCard">
      <img
        className="moviesCard__image"
        src={require("../../../images/pic.png")}
        alt="фотография"
      ></img>
      <div className="moviesCard__box">
        <p className="moviesCard__title">Название фильма</p>
        <button
          className={`${
            pathname ? `moviesCard__like-deleteButton` : `moviesCard__like`
          }`}
          type="button"
        ></button>
      </div>
      <p className="moviesCard__time">1ч 42м</p>
    </div>
  );
}
