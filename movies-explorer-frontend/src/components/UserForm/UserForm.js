import React from "react";
import "./UserForm.css";

export default function UserForm(props) {
  return (
    <section className="userForm">
      <h2 className="userForm__title">{props.title}</h2>
      <form className="userForm__form" onSubmit={props.onSubmit}>
        {props.children}
        <button className="userForm__submit">{props.button}</button>
      </form>
      {props.register && (
        <div className="userForm__isLogged">
          <p className="userForm__text">
            Уже зарегестрированы? <span className="userForm__link"> Войти</span>
          </p>
        </div>
      )}
      {props.login && (
        <div className="userForm__isLogged">
          <p className="userForm__text">
            Ещё не зарегестрированы?{" "}
            <span className="userForm__link">Регистрация</span>
          </p>
        </div>
      )}
    </section>
  );
}
