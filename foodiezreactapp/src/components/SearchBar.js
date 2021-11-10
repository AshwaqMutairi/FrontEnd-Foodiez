import React from "react";
// Styling

function SearchBar({ setQuery }) {
  const checkLength = (string) => {
    if (string.length >= 2) {
      setQuery(string);
    } else {
      setQuery("");
    }
  };

  return (
    <div className="search">
      <input
        className="searchbar"
        onChange={(event) => checkLength(event.target.value)}
        placeholder="Search "
      />
    </div>
  );
}

export default SearchBar;
