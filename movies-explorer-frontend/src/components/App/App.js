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
import { useLocation } from "react-router-dom";
import React from "react";
import Error from "../Error/Error";

function App() {
  const location = useLocation();
  const pathnameFooter =
    location.pathname !== "/profile" &&
    location.pathname !== "/signin" &&
    location.pathname !== "/signup";
  const pathnameHeader =
    location.pathname !== "/signin" && location.pathname !== "/signup";
  const [isLogged, setIsLogged] = React.useState(true);
  return (
    <div className="App">
      {pathnameHeader ? <Header isLogged={isLogged} /> : ""}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {pathnameFooter ? <Footer /> : ""}
    </div>
  );
}

export default App;
