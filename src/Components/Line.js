import React from "react";

const Line = ({ searchedEmoji }) => {
  return (
    <div className="emoji-list">
      {searchedEmoji.map((element, index) => (
        <div key={index}>{element.symbol}</div>
      ))}
    </div>
  );
};

export default Line;
