import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import React from "react";
import Error from "../Error/Error";

function App() {
  const [isLogged, setIsLogged] = React.useState(true);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main isLogged={isLogged} />} />
        <Route path="/movies" element={<Movies isLogged={isLogged} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies isLogged={isLogged} />}
        />
        <Route path="/profile" element={<Profile isLogged={isLogged} />} />
        <Route path="signin" element={<Login isLogged={isLogged} />} />
        <Route path="signup" element={<Register isLogged={isLogged} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
