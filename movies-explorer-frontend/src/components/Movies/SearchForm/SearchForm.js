import React, { useEffect } from "react";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";
import useFormValidation from "../../FormValidation/FormValidation";
import ErrorContext from "../../context/ErrorContext";

export default function SearchForm(props) {
  const { pathname } = useLocation();
  const { values, handleChange, reset } = useFormValidation();
  const isError = React.useContext(ErrorContext);

  useEffect(() => {
    if (pathname === "/saved-movies" && props.savedMovie.length === 0) {
      reset({ search: "" });
    } else {
      reset({ search: props.searchedMovie });
    }
  }, [props.searchedMovie, reset, pathname, props.savedMovie]);

  function onSubmit(e) {
    e.preventDefault();
    if (e.target.search.value) {
      props.searchMovies(e.target.search.value);
      props.setIsError(false);
    } else {
      props.setIsError(true);
    }
  }

  console.log(props.setIsError);

  return (
    <section className="searchForm">
      <form
        className="searchForm__form"
        name="search-movie"
        noValidate
        onSubmit={onSubmit}
      >
        <div className="searchForm__container">
          <input
            type="text"
            placeholder="Фильм"
            required
            className="searchForm__input"
            name="search"
            value={values.search || ""}
            onChange={(evt) => {
              handleChange(evt);
              props.setIsError(false);
            }}
          ></input>
          <button type="submit" className="searchForm__button">
            Найти
          </button>
        </div>
        <div className="searchForm__form-box">
          <input
            type="checkbox"
            id="toggle"
            className="searchForm__checkbox"
            disabled={props.firstEntrance}
            onChange={() => props.shortChange()}
            checked={props.isCheck ? true : false}
          />
          <label for="toggle" className="searchForm__switch"></label>
          <p className="searchForm__paragraph">Короткометражки</p>
        </div>
        <span
          className={`searchForm__error ${
            isError && "searchForm__error_active"
          }`}
        >
          {"Введите ключевое слово"}
        </span>
      </form>
    </section>
  );
}
