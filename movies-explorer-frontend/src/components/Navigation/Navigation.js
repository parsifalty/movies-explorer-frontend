import "./Navigation.css";
import NavMenu from "./NavMenu/NavMenu";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import React from "react";

export default function Navigation(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  console.log(!props.isDesktop.isTablet);

  return (
    <>
      {" "}
      {!props.isDesktop.isMobile ? (
        <NavMenu isDesktop={props.isDesktop} />
      ) : (
        <>
          <button
            className={
              props.location ? `navigation-button-black` : `navigation-button`
            }
            onClick={handleOpen}
            type="button"
          ></button>
          <BurgerMenu
            isDesktop={props.isDesktop}
            isOpen={isOpen}
            handleClose={handleClose}
          />
        </>
      )}
    </>
  );
}
