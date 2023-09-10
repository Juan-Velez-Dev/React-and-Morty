import React from "react";
import "./searchBar.css";

export default function SearchBar({ onSearch, randomChar }) {
  //* STATES
  const [id, setId] = React.useState("");

  //* FUNCTIONS
  const handleChange = (event) => {
    const { value } = event.target;
    setId(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    onSearch(id);
    setId("");
  };

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        value={id}
        onChange={handleChange}
        className="search-input"
      />
      <button onClick={handleClick} className="search-btn">
        Add
      </button>
      <button onClick={randomChar} className="search-btn">
        Random
      </button>
    </div>
  );
}
