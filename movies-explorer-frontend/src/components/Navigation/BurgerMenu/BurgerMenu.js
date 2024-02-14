import React from "react";
import "./BurgerMenu.css";
import NavMenu from "../NavMenu/NavMenu";

export default function BurgerMenu(props) {
  return (
    <section
      className={`burgerMenu ${props.isOpen ? `burgerMenu_active` : ""}`}
    >
      <div className="burgerMenu__box">
        <button
          className="burgerMenu__box-button"
          onClick={props.handleClose}
          type="button"
        ></button>
        <NavMenu isDesktop={props.isDesktop} />
      </div>
    </section>
  );
}
