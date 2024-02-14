import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "./MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import {
  Maxscreen,
  MediumScreen,
  Smallscreen,
  InitMoreMaxscreen,
  InitLessMaxScreen,
  InitMediumScreen,
  InitSmallscreen,
  StepMaxscreen,
  StepMediumscreen,
  Stepsmallscreen,
} from "../../../utils/constants";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardList(props) {
  const movies = props.movies;

  const { pathname } = useLocation();
  const [count, setCount] = React.useState("");
  const fact = movies.slice(0, count);

  function printCards() {
    const counter = { init: InitMoreMaxscreen, step: StepMaxscreen };
    if (window.innerWidth < Maxscreen) {
      counter.init = InitLessMaxScreen;
      counter.step = StepMediumscreen;
    }
    if (window.innerWidth < MediumScreen) {
      counter.init = InitMediumScreen;
      counter.step = Stepsmallscreen;
    }
    if (window.innerWidth < Smallscreen) {
      counter.init = InitSmallscreen;
      counter.step = Stepsmallscreen;
    }
    return counter;
  }

  React.useEffect(() => {
    if (pathname === "/movies") {
      setCount(printCards().init);
      function printCardsForResize() {
        if (window.innerWidth >= StepMaxscreen) {
          setCount(printCards().init);
        }
        if (window.innerWidth < StepMaxscreen) {
          setCount(printCards().init);
        }
        if (window.innerWidth < MediumScreen) {
          setCount(printCards().init);
        }
        if (window.innerWidth < Smallscreen) {
          setCount(printCards().init);
        }
      }
      window.addEventListener("resize", printCardsForResize);
      return () => window.removeEventListener("resize", printCardsForResize);
    }
  }, [pathname]);

  function handleClick() {
    setCount(count + printCards().step);
  }

  return (
    <>
      <section className="moviesCardList">
        <ul className="moviesCardList__list">
          {props.isLoading ? (
            <Preloader />
          ) : pathname === "/movies" && fact.length !== 0 ? (
            fact.map((data) => {
              return (
                <MoviesCard
                  key={data.id}
                  savedMovies={props.savedMovies}
                  data={data}
                  onAdd={props.onAdd}
                />
              );
            })
          ) : props.movies.length !== 0 ? (
            props.movies.map((data) => {
              return (
                <MoviesCard
                  key={data._id}
                  data={data}
                  onDelete={props.onDelete}
                />
              );
            })
          ) : props.serverError ? (
            <span className="moviesCardList__error">
              «Во время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного и попробуйте
              ещё раз»
            </span>
          ) : !props.firstEntrance ? (
            <span className="moviesCardList__error">«Ничего не найдено»</span>
          ) : pathname === "/movies" ? (
            <span className="moviesCardList__error">
              «Чтобы увидеть список фильмоа выполните поиск»
            </span>
          ) : (
            <span className="moviesCardList__error">
              «Нет сохранённых фильмов»
            </span>
          )}
        </ul>
        {pathname === "/movies" && !props.isLoading ? (
          <button
            type="button"
            className={`moviesCardList__button ${
              count >= movies.length && `moviesCardList__button-invisible`
            }`}
            onClick={handleClick}
          >
            Ещё
          </button>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
