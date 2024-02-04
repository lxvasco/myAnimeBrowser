import React from "react";

import "./searchBox.css";

const SearchBox = ({ setSearch, getAnimeDataList }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getAnimeDataList();
  };
  return (
    <form className="searchBox" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Type your favorite anime!"
        onChange={handleInputChange}
      ></input>
      <button className="button" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;
