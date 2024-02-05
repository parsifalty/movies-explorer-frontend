import "./Header.css";
import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { useLocation } from "react-router-dom";
import useDeviceType from "../Resizer/Resizer";
import NavPromo from "../Navigation/NavPromo/NavPromo";

export default function Header(props) {
  const location = useLocation();
  const pathname = location.pathname !== "/";
  const isDesktop = useDeviceType();

  return (
    <header className={pathname ? `header-white` : `header`}>
      <div className="header__container">
        <Logo />
        {props.isLogged ? (
          <Navigation isDesktop={isDesktop} location={pathname} />
        ) : (
          <NavPromo />
        )}
      </div>
    </header>
  );
}
