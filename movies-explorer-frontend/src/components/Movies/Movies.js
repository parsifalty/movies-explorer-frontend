import React, { useCallback, useEffect } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import apiMovies from "../../utils/Api/MoviesApi";

export default function Movies(props) {
  const [allMovies, setAllMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [searchMovie, setSearchMovie] = React.useState("");
  const [isCheck, setIsCheck] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [serverError, setServerError] = React.useState(false);
  const [firstEntrance, setFirstEntrance] = React.useState(true);

  const filter = useCallback((search, isCheck, movies) => {
    localStorage.setItem("movie", JSON.stringify(search));
    localStorage.setItem("shorts", JSON.stringify(isCheck));
    localStorage.setItem("allmovies", JSON.stringify(movies));
    setSearchMovie(search);
    setFilteredMovies(
      movies.filter((movie) => {
        const searchName = movie.nameRU
          .toLowerCase()
          .includes(search.toLowerCase());
        return isCheck ? searchName && movie.duration <= 40 : searchName;
      })
    );
  }, []);

  function searchMovies(search) {
    if (allMovies.length === 0) {
      apiMovies
        .getMovies()
        .then((res) => {
          setAllMovies(res);
          setIsCheck(false);
          setServerError(false);
          setFirstEntrance(false);
          filter(search, isCheck, res);
        })
        .catch((err) => {
          setServerError(true);
          console.error(`Ошибка поиска ${err}`);
        })
        .finally(() => setIsLoading(true));
    } else {
      filter(search, isCheck, allMovies);
    }
  }

  React.useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies);
      const search = JSON.parse(localStorage.movie);
      const isCheck = JSON.parse(localStorage.shorts);
      setServerError(false);
      setFirstEntrance(false);
      setSearchMovie(search);
      setIsCheck(isCheck);
      setAllMovies(movies);
      filter(search, isCheck, movies);
    }
  }, [filter]);

  function shortChange() {
    if (isCheck) {
      setIsCheck(false);
      filter(searchMovie, false, allMovies);
    } else {
      setIsCheck(true);
      filter(searchMovie, true, allMovies);
    }
  }

  return (
    <>
      <Header isLogged={props.isLogged} />
      <main className="movies">
        <SearchForm
          searchMovies={searchMovies}
          isCheck={isCheck}
          searchedMovie={searchMovie}
          firstEntrance={firstEntrance}
          shortChange={shortChange}
          setIsError={props.setIsError}
        />
        <MoviesCardList
          movies={filteredMovies}
          savedMovies={props.savedMovies}
          firstEntrance={firstEntrance}
          isLoading={isLoading}
          serverError={serverError}
          onAdd={props.onAdd}
          onDelete={props.onDelete}
          isChecked={isCheck}
        />
      </main>
      <Footer />
    </>
  );
}
