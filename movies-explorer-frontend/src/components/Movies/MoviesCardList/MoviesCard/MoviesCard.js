import React, { useEffect } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

export default function MoviesCard(props) {
  const location = useLocation();
  const pathnameSaved = location.pathname === "/saved-movies";
  const pathnameMovies = location.pathname === "/movies";
  const [click, setClick] = React.useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathnameMovies)
      setClick(
        props.savedMovies.some((element) => props.data.id === element.movieId)
      );
  }, [props.savedMovies, props.data.id, setClick, pathnameMovies]);

  function handleClick() {
    if (
      props.savedMovies.some((element) => props.data.id === element.movieId)
    ) {
      setClick(true);
      props.onAdd(props.data);
    } else {
      setClick(false);
      props.onAdd(props.data);
    }
  }

  function convertTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return hours === 0
      ? `${minutes}м`
      : minutes === 0
      ? `${hours}ч`
      : `${hours}ч ${minutes}м`;
  }

  return (
    <div className="moviesCard">
      <img
        className="moviesCard__image"
        src={
          pathnameMovies
            ? `https://api.nomoreparties.co${props.data.image.url}`
            : props.data.image
        }
        alt={props.data.name}
      ></img>
      <div className="moviesCard__box">
        <h2 className="moviesCard__title">{props.data.nameRU}</h2>
        {pathname === "/movies" ? (
          <button
            className={` ${click ? `moviesCard__like` : "moviesCard__liked"}`}
            type="button"
            onClick={handleClick}
          ></button>
        ) : (
          <button
            onClick={() => props.onDelete(props.data._id)}
            className="moviesCard__like-deleteButton"
            type="button"
          ></button>
        )}
      </div>
      <p className="moviesCard__time">{convertTime(props.data.duration)}</p>
    </div>
  );
}
