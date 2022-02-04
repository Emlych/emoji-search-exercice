import React from "react";

const Line = ({ searchedEmoji, copyEmoji }) => {
  return (
    <div className="emoji-list">
      {searchedEmoji.map((element, index) => (
        <div
          className="emoji-line"
          onClick={() => copyEmoji(element)}
          key={index}
        >
          {element.symbol} {element.title}
        </div>
      ))}
    </div>
  );
};

export default Line;
