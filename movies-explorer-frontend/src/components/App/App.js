import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import React from "react";
import Error from "../Error/Error";
import apiMain from "../../utils/Api/MainApi";
import apiMovies from "../../utils/Api/MoviesApi";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../context/UserContext";
import * as auth from "../../utils/Auth";
import ErrorContext from "../context/ErrorContext";

function App() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = React.useState(true);
  const [isSend, setIsSend] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
  const [isCheckedToken, setIsCheckedToken] = React.useState(true);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [userEmail, setUserEmail] = React.useState({});

  React.useEffect(() => {
    if (!isLogged) return;
    Promise.all([
      apiMain.getUserData(localStorage.jwt),
      apiMain.getMovies(localStorage.jwt),
    ])
      .then(([userData, userMovies]) => {
        setCurrentUser(userData);
        setSavedMovies(userMovies);
      })

      .catch((err) => console.error(err));
  }, [isLogged]);

  React.useEffect(() => {
    const jwt = localStorage.jwt;
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            setUserEmail({ email: data.email });
            setIsLogged(true);
            navigate("/movies");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        navigate("/movies");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLogged(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleSubmitProfileForm(username, email) {
    apiMain
      .setUserInfo(username, email, localStorage.jwt)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.error(err));
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    navigate("/");
    setIsLogged(false);
  }

  function handleDeleteMovie(deleteMovieId) {
    apiMain
      .deleteMovie(deleteMovieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== deleteMovieId;
          })
        );
      })
      .catch((err) => console.error(`Ошибка при удалении фильмов ${err}`));
  }

  function handleToggleState(data) {
    const isAdd = savedMovies.some((element) => data.id === element.movieId);
    const searchClickMovie = savedMovies.filter((movie) => {
      return movie.movieId === data.id;
    });
    if (isAdd) {
      handleDeleteMovie(searchClickMovie[0]._id);
      console.log(searchClickMovie);
    } else {
      apiMain
        .addMovie(data, localStorage.jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => console.error(`Ошибка при установке лайка ${err}`));
    }
  }

  console.log(currentUser);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ErrorContext.Provider value={isError}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main isLogged={isLogged} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  element={Movies}
                  setIsError={setIsError}
                  isLogged={isLogged}
                  logged={isLogged}
                  savedMovies={savedMovies}
                  onAdd={handleToggleState}
                  onDelete={handleDeleteMovie}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  isLogged={isLogged}
                  logged={isLogged}
                  savedMovie={savedMovies}
                  onDelete={handleDeleteMovie}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  element={Profile}
                  isLogged={isLogged}
                  logged={isLogged}
                  handleSignOut={handleSignOut}
                  onSubmit={handleSubmitProfileForm}
                  setIsError={setIsError}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  isLogged={isLogged}
                  onLogin={handleLogin}
                  setIsError={setIsError}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  onRegister={handleRegister}
                  setIsError={setIsError}
                  isLogged={isLogged}
                />
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </ErrorContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
