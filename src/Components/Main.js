import React from "react";
import Search from "./Search";
import Line from "./Line";
import emoji from "../assets/emojiList.json";
import { useState } from "react";

const Main = () => {
  //Limit number of emojis displayed (issu de la correction)
  const [results, setresults] = useState(emoji.slice(0, 20));

  // Filter emojis by keywords entered in search bar
  const [search, setsearch] = useState("");
  const handleSearch = (event) => {
    setsearch(event.target.value);
  };
  const searchedEmoji = emoji
    .filter((item) => {
      console.log(typeof item.keywords.includes(search)); //ça me rend un boolean. Je comprends pas
      return item.keywords.includes(search);
    })
    .slice(0, 20);

  // Copy emoji to clipboard
  const copyEmoji = (element) => {
    console.log("i get ===>", navigator.clipboard.writeText(element.symbol));
  };

  return (
    <div className="main">
      <Search search={search} handleSearch={handleSearch} />
      <Line searchedEmoji={searchedEmoji} copyEmoji={copyEmoji} />
    </div>
  );
};

export default Main;
