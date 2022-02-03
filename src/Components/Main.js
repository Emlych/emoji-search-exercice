import React from "react";
import Search from "./Search";
import Line from "./Line";
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
      <Search search={search} handleSearch={handleSearch} />
      <Line searchedEmoji={searchedEmoji} />
    </div>
  );
};

export default Main;
