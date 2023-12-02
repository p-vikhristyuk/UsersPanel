import React from "react";
const Search = ({ onChange, value, placeholder = "Search" }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => onChange(target.value)}
      />
    </div>
  );
};

export default Search;
