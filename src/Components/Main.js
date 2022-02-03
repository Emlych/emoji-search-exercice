import React from "react";
import emoji from "../assets/emojiList.json";
import { useState } from "react";

const Main = () => {
  const [search, setsearch] = useState("");
  const handleSearch = (event) => {
    setsearch(event.target.value);
  };
  const searchedEmoji = emoji.filter((item) => {
    console.log(item);
    return item.symbol.includes(search);
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
      <div className="emoji-list">
        {/* on parcourt emoji et on n'affiche que les emojis dont le keyword correspond */}

        {searchedEmoji}
      </div>
    </div>
  );
};

export default Main;
