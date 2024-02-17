import React from "react";
import "./Login.css";
import Logo from "../Logo/Logo";
import UserForm from "../UserForm/UserForm";
import useFormValidation from "../FormValidation/FormValidation";
import { EmailRegex } from "../../utils/constants";

export default function Login(props) {
  const { values, errors, isInputValid, isValid, handleChange } =
    useFormValidation();

  function onSubmit(e) {
    e.preventDefault();
    props.onLogin(values.email, values.password);
  }

  return (
    <main className="login">
      <div className="login__container">
        <Logo />
        <UserForm
          title={"Рады видеть!"}
          button={"Войти"}
          path={"/signup"}
          onSubmit={onSubmit}
          isValid={isValid}
          login
        >
          <label for="userEmail" className="userForm__label">
            {" "}
            E-mail
          </label>
          <input
            className="userForm__input userForm__input_type_email"
            id="userEmail"
            name="email"
            type="email"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
            placeholder="E-mail"
            pattern={EmailRegex}
            onChange={(evt) => {
              handleChange(evt);
              props.setIsError(false);
            }}
            value={values.email}
          />
          <span className="userForm__error">{errors.email}</span>
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
            minLength="3"
            maxLength="200"
            autoComplete="off"
            placeholder="Пароль"
            onChange={(evt) => {
              handleChange(evt);
              props.setIsError(false);
            }}
            value={values.password}
          />
          <span className="userForm__error userForm__error-password-login">
            {errors.password}
          </span>
        </UserForm>
      </div>
    </main>
  );
}
