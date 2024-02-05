import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="searchForm">
      <form className="searchForm__form" name="search-movie" noValidate>
        <div className="searchForm__container">
          <input
            type="text"
            placeholder="Фильм"
            required
            className="searchForm__input"
          ></input>
          <button type="submit" className="searchForm__button">
            Найти
          </button>
        </div>
        <div className="searchForm__box">
          <input type="checkbox" id="toggle" className="searchForm__checkbox" />
          <label for="toggle" class="searchForm__switch"></label>
          <p className="searchForm__paragraph">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}
