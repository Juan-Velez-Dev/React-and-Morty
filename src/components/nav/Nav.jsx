import React from "react";
import "./nav.css";
//* COMPONENTS
import SearchBar from "../searchbar/SearchBar";

//* HOOKS
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Nav({ logOut, onSearch, randomChar }) {
  const location = useLocation();
  return (
    <div className="nav">
      {location.pathname === "/home" && (
        <SearchBar onSearch={onSearch} randomChar={randomChar} />
      )}
      <div className="nav-button">
        <NavLink className="nav-link" to="/home">
          <button className="nav-home">Home</button>
        </NavLink>

        {location.pathname !== "/about" && (
          <NavLink className="nav-link" to="/about">
            <button className="nav-about">About</button>
          </NavLink>
        )}

        <NavLink to="/favorites">
          <button>Favorites</button>
        </NavLink>
        <NavLink className="nav-link" to="/">
          <button onClick={logOut} className="logout">
            Logout
          </button>
        </NavLink>
      </div>
    </div>
  );
}
