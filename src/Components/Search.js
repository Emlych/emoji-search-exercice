import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <div className="header">
        <h1>😎 Emoji Search 😎</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={props.search}
          onChange={props.handleSearch}
          placeholder="what emoji are you looking for?"
        />
      </div>
    </div>
  );
};

export default Search;
