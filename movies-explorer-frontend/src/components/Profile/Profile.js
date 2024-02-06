import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__welcome">Привет, Виталий!</h1>
      <div className="profile__flex">
        <form className="profile__box profile__box-username" noValidate>
          <input
            className="profile__box-input"
            disabled
            id="userEmail"
            name="userEmail"
            type="email"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
            placeholder="Имя"
          />
          <input
            placeholder="E-mail"
            className="profile__box-input"
            disabled
            id="userName"
            name="userName"
            type="text"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
          />
        </form>
        <div className="profile__box">
          <p className="profile__paragraph">Виталий</p>
          <p className="profile__paragraph">pasifalty@gmail.com</p>
        </div>
      </div>
      <div className="profile__buttons">
        <button className="profile__edit-button" type="submit">
          Редактировать
        </button>
        <button className="profile__logout-button">
          <Link to="/" className="profile__link">
            Выйти из аккаунта
          </Link>
        </button>
      </div>
    </section>
  );
}
