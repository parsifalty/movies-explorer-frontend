import React, { useCallback, useEffect } from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function SavedMovies(props) {
  const [filteredMovies, setFilteredMovies] = React.useState(props.savedMovie);
  const [searchMovie, setSearchMovie] = React.useState("");
  const [isCheck, setIsCheck] = React.useState(false);
  const [firstEntrance, setFirstEntrance] = React.useState(true);

  const filter = useCallback((search, isCheck, movies) => {
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

  console.log(filteredMovies);

  function searchMovies(search) {
    setFirstEntrance(false);
    filter(search, isCheck, props.savedMovie);
  }

  useEffect(() => {
    if (props.savedMovie.length === 0) {
      setFilteredMovies(true);
    } else {
      setFirstEntrance(false);
    }
    filter(searchMovie, isCheck, props.savedMovie);
  }, [filter, props.savedMovie, isCheck, searchMovie]);

  function shortChange() {
    if (isCheck) {
      setIsCheck(false);
      setFirstEntrance(false);
      filter(searchMovie, false, props.savedMovie);
    } else {
      setIsCheck(true);
      setFilteredMovies(false);
      filter(searchMovie, true, props.savedMovie);
    }
  }

  return (
    <>
      <Header isLogged={props.isLogged} />
      <main className="savedMovies">
        <SearchForm
          searchMovies={searchMovies}
          savedMovie={props.savedMovie}
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
          onDelete={props.onDelete}
        />
      </main>
      <Footer />
    </>
  );
}
