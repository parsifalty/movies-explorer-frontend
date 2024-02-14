import React from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavMenu(props) {
  const location = useLocation();
  const pathname = location.pathname !== "/";
  return (
    <nav className="navlinks">
      <ul className="navlinks__list">
        {!props.isDesktop.isDesktop && !props.isDesktop.isTablet && (
          <li className="navlinks__list-item">
            <Link to="/" className="navlinks__link navlinks__link_type-profile">
              Главная
            </Link>
          </li>
        )}
        <li className="navlinks__list-item">
          <Link
            to="/movies"
            className={
              pathname && !props.isDesktop.isMobile
                ? `navlinks__link`
                : "navlinks__link-white"
            }
          >
            Фильмы
          </Link>
        </li>
        <li className="navlinks__list-item">
          <Link
            to="/saved-movies"
            className={
              pathname && !props.isDesktop.isMobile
                ? `navlinks__link`
                : "navlinks__link-white"
            }
          >
            Сохраненные фильмы
          </Link>
        </li>
        <li className="navlinks__list-item">
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
