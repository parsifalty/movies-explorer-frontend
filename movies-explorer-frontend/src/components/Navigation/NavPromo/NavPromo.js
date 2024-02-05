import React from "react";
import "./NavPromo.css";
import { Link } from "react-router-dom";
export default function NavPromo() {
  return (
    <nav className="navpromo">
      <ul className="navpromo__list">
        <li className="navpromo__link ">
          <Link
            to="/signup"
            className="navpromo__links navpromo__link_type_register"
          >
            Регистрация
          </Link>
        </li>
        <li className="navpromo__link">
          {" "}
          <Link
            to="/signin"
            className="navpromo__links  navpromo__link_type_login"
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}
