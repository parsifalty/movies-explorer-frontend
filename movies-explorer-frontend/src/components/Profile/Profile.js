import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import CurrentUserContext from "../context/UserContext";
import useFormValidation from "../FormValidation/FormValidation";
import { EmailRegex } from "../../utils/constants";

export default function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const { values, errors, isInputValid, isValid, handleChange } =
    useFormValidation();

  const [isEditing, setIsEditing] = React.useState(false);

  /* React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]); */

  function handleEditing() {
    if (!isEditing) {
      return setIsEditing(true);
    }
    return setIsEditing(false);
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    props.onSubmit(values.name, values.email);
    setIsEditing(false);
  }

  return (
    <>
      <Header isLogged={props.isLogged} />
      <main className="profile">
        <h1 className="profile__welcome">{`Привет, ${currentUser.name}!`}</h1>
        <form
          className="profile__box profile__box-username"
          noValidate
          onSubmit={handleSubmitForm}
        >
          <div className="profile__box-box">
            <div className="profile__box-paragraph-box">
              <p className="profile__paragraph">Имя</p>
              <p className="profile__paragraph">E-mail</p>
            </div>
            <div className="profile__box-input-box">
              <input
                className="profile__box-input"
                id="userName"
                name="name"
                type="text"
                required
                minLength="2"
                maxLength="40"
                autoComplete="off"
                placeholder=""
                value={values.name}
                onChange={(evt) => {
                  handleChange(evt);
                  props.setIsError(false);
                }}
                disabled={!isEditing}
              />
              <span className="profile__error profile__error-name">
                {errors.name}
              </span>
              <input
                placeholder=""
                className="profile__box-input"
                id="userEmail"
                name="email"
                type="email"
                required
                minLength="2"
                maxLength="40"
                pattern={EmailRegex}
                autoComplete="off"
                onChange={(evt) => {
                  handleChange(evt);
                  props.setIsError(false);
                }}
                disabled={!isEditing}
                value={values.email}
              />
              <span className="profile__error profile__error-email">
                {errors.email}
              </span>
            </div>
          </div>
          <div className="profile__buttons">
            <button
              type="submit"
              disabled={!isValid}
              className={
                isEditing
                  ? `profile__submit-button profile__submit-button_active ${
                      isValid ? "" : `profile__submit-button_disabled`
                    }`
                  : `profile__submit-button`
              }
            >
              Сохранить
            </button>
            <button
              className="profile__edit-button"
              type="button"
              onClick={handleEditing}
            >
              {isEditing ? `Отменить редактирование` : `Редактировать`}
            </button>
            <button
              className="profile__logout-button"
              type="button"
              onClick={props.handleSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
