import React from "react";
import "./searchbar.css";
import debounce from "../utils/debounce.js";
const SearchBar = props => {
  const handleSearchTextChange = e => {
    props.setsearchText(e[0].target.value);
  };

  return (
    <form>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={debounce(handleSearchTextChange, 3000)}
      />
    </form>
  );
};

export default SearchBar;
