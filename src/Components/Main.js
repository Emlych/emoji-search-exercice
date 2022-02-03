import React from "react";
import Search from "./Search";
import Line from "./Line";
import emoji from "../assets/emojiList.json";
import { useState } from "react";

const Main = () => {
  // Filter emojis by keywords entered in search bar
  const [search, setsearch] = useState("");
  const handleSearch = (event) => {
    setsearch(event.target.value);
  };
  const searchedEmoji = emoji.filter((item) => {
    return item.keywords.includes(search);
  });

  // Copy emoji to clipboard
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const copyEmoji = async (event) => {
    setSelectedEmoji(event.target.value);
    await console.log(
      "i get ===>",
      navigator.clipboard.writeText(selectedEmoji.symbol)
    );
  };

  return (
    <div className="main">
      <Search search={search} handleSearch={handleSearch} />
      <Line searchedEmoji={searchedEmoji} copyEmoji={copyEmoji} />
    </div>
  );
};

export default Main;
