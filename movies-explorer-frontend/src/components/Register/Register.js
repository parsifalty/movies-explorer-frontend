import React from "react";
import "./Register.css";
import Logo from "../Logo/Logo";
import UserForm from "../UserForm/UserForm";

export default function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Logo />
        <UserForm
          title={"Добро пожаловать!"}
          button={"Зарегестрироваться"}
          path={"/singin"}
          register
        >
          <label for="userName" className="userForm__label">
            {" "}
            Имя
          </label>
          <input
            className="userForm__input"
            id="userName"
            name="userName"
            type="text"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
          />
          <label for="userEmail" className="userForm__label">
            {" "}
            E-mail
          </label>
          <input
            className="userForm__input"
            id="userEmail"
            name="userEmail"
            type="E-mail"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
          />
          <label for="password" className="userForm__label">
            {" "}
            Пароль
          </label>
          <input
            className="userForm__input"
            id="password"
            name="password"
            type="password"
            required
            minLength="2"
            maxLength="200"
            autoComplete="off"
          />
        </UserForm>
      </div>
    </section>
  );
}
