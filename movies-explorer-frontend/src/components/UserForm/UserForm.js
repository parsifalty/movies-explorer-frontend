import React from "react";
import "./UserForm.css";
import { Link } from "react-router-dom";

export default function UserForm(props) {
  console.log(props.isSend);
  return (
    <section className="userForm">
      <h1 className="userForm__title">{props.title}</h1>
      <form className="userForm__form" onSubmit={props.onSubmit} noValidate>
        {props.children}
        {props.isError ? (
          <span className="userForm__error">
            На сервере произошла ошибка попробуйте позже
          </span>
        ) : (
          ""
        )}
        <button
          className={
            !props.isValid ? `userForm__submit-disabled` : `userForm__submit`
          }
          type="submit"
          disabled={!props.isValid || props.isSend}
        >
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
