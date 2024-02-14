import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

export default function MoviesCard(props) {
  const location = useLocation();
  const pathname = location.pathname === "/saved-movies";

  return (
    <div className="moviesCard">
      <img
        className="moviesCard__image"
        src={require("../../../images/pic.png")}
        alt={props.title}
      ></img>
      <div className="moviesCard__box">
        <h2 className="moviesCard__title">{props.title}</h2>
        <button
          className={`${
            pathname ? `moviesCard__like-deleteButton` : `moviesCard__like`
          }`}
          type="button"
        ></button>
      </div>
      <p className="moviesCard__time">{props.time}</p>
    </div>
  );
}
