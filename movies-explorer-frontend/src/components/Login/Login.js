import React from "react";
import "./Login.css";
import Logo from "../Logo/Logo";
import UserForm from "../UserForm/UserForm";

export default function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Logo />
        <UserForm
          title={"Рады видеть!"}
          button={"Войти"}
          path={"/singup"}
          login
        >
          <label for="userEmail" className="userForm__label">
            {" "}
            E-mail
          </label>
          <input
            className="userForm__input userForm__input_type_email"
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
            className="userForm__input userForm__input_type_password"
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
