import React from "react";
import emoji from "../assets/emojiList.json";
import { useState } from "react";

const Main = () => {
  const [search, setsearch] = useState("");
  const handleSearch = (event) => {
    setsearch(event.target.value);
  };

  const searchedEmoji = emoji.filter((item) => {
    return item.keywords.includes(search);
  });
  return (
    <div className="main">
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="what emoji are you looking for?"
        />
      </div>
      <div>You are searching {search}.</div>
      {console.log(searchedEmoji)}
      <div className="emoji-list">
        {searchedEmoji.map((element, index) => (
          <div key={index}>{element.symbol}</div>
        ))}
      </div>
    </div>
  );
};

export default Main;
