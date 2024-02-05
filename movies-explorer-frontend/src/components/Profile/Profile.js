import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__welcome">Привет, Виталий!</h1>
      <div
        className="profile__box
      profile__box-username"
      >
        <p className="profile__paragraph">Имя</p>
        <p className="profile__paragraph">Виталий</p>
      </div>
      <div className="profile__box profile__box-email">
        <p className="profile__paragraph">Email</p>
        <p className="profile__paragraph">pasifalty@gmail.com</p>
      </div>
      <div className="profile__buttons">
        <button className="profile__edit-button">Редактировать</button>
        <button className="profile__logout-button">Выйти из аккаунта</button>
      </div>
    </section>
  );
}
