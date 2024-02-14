import React from "react";
import "./UserForm.css";
import { Link } from "react-router-dom";

export default function UserForm(props) {
  return (
    <section className="userForm">
      <h1 className="userForm__title">{props.title}</h1>
      <form className="userForm__form" onSubmit={props.onSubmit}>
        {props.children}
        <button className="userForm__submit" type="submit">
          {props.button}
        </button>
      </form>
      {props.register && (
        <div className="userForm__isLogged">
          <p className="userForm__text">
            Уже зарегестрированы?{" "}
            <Link className="userForm__link" to="/signin">
              Войти
            </Link>
          </p>
        </div>
      )}
      {props.login && (
        <div className="userForm__isLogged">
          <p className="userForm__text">
            Ещё не зарегестрированы?{" "}
            <Link className="userForm__link" to="/signup">
              Регистрация
            </Link>
          </p>
        </div>
      )}
    </section>
  );
}
