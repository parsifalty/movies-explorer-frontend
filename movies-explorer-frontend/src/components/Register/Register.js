import React from "react";
import "./Register.css";
import Logo from "../Logo/Logo";
import UserForm from "../UserForm/UserForm";
import useFormValidation from "../FormValidation/FormValidation";
import { EmailRegex } from "../../utils/constants";

export default function Register(props) {
  const { values, errors, isInputValid, isValid, handleChange } =
    useFormValidation();

  function onSubmit(e) {
    e.preventDefault();
    props.onRegister(values.name, values.email, values.password);
  }

  return (
    <main className="register">
      <div className="register__container">
        <Logo />
        <UserForm
          title={"Добро пожаловать!"}
          button={props.isSend ? "Регистрация..." : "Зарегестрироваться"}
          path={"/signin"}
          onSubmit={onSubmit}
          register
          isValid={isValid}
          isSend={props.isSend}
        >
          <label for="userName" className="userForm__label">
            {" "}
            Имя
          </label>
          <input
            className="userForm__input"
            id="userName"
            name="name"
            type="text"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
            placeholder="Имя"
            value={values.name}
            onChange={(evt) => {
              handleChange(evt);
              props.setIsError(false);
            }}
          />
          <span className="userForm__error">{errors.name}</span>
          <label for="userEmail" className="userForm__label">
            {" "}
            E-mail
          </label>
          <input
            className="userForm__input"
            id="userEmail"
            name="email"
            type="email"
            required
            minLength="3"
            maxLength="40"
            autoComplete="off"
            placeholder="E-mail"
            pattern={EmailRegex}
            value={values.email}
            onChange={(evt) => {
              handleChange(evt);
              props.setIsError(false);
            }}
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
            minLength="2"
            maxLength="200"
            autoComplete="off"
            placeholder="Пароль"
            value={values.password}
            onChange={(evt) => {
              handleChange(evt);
              props.setIsError(false);
            }}
          />
          <span className="userForm__error">{errors.password}</span>
        </UserForm>
      </div>
    </main>
  );
}
