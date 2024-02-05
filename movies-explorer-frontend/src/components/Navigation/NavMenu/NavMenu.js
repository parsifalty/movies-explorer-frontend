import React from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";

export default function NavMenu(props) {
  return (
    <nav className="navlinks">
      <ul className="navlinks__list">
        {!props.isDesktop.isDesktop && (
          <li className="navlinks__item">
            <Link to="/" className="navlinks__link">
              Главная
            </Link>
          </li>
        )}
        <li className="navlinks__item">
          <Link to="movies" className="navlinks__link">
            Фильмы
          </Link>
        </li>
        <li className="navlinks__item">
          <Link to="/saved-movies" className="navlinks__link">
            Сохраненные фильмы
          </Link>
        </li>
        <li className="navlinks__item">
          {" "}
          <Link
            to="/profile"
            className="navlinks__link navlinks__link_type_profile"
          >
            Аккаунт
          </Link>
        </li>
      </ul>
    </nav>
  );
}
