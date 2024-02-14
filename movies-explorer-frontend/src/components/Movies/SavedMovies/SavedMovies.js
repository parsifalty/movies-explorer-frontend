import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function SavedMovies(props) {
  return (
    <>
      <Header isLogged={props.isLogged} />
      <main className="savedMovies">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}
