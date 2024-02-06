import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "./MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__list">
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
        <li className="moviesCardList__list-item">
          {" "}
          <MoviesCard />
        </li>
      </ul>
      <button type="button" className="moviesCardList__button">
        Ещё
      </button>
    </section>
  );
}
