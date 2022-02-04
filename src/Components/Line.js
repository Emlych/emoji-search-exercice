import React from "react";
import { useState } from "react";

const Line = ({ searchedEmoji, copyEmoji }) => {
  const [hoverLine, setHoverLine] = useState(false);
  return (
    <div className="emoji-list">
      {searchedEmoji.map((element, index) => (
        <div
          className="emoji-line"
          key={index}
          onClick={() => copyEmoji(element)}
          onMouseEnter={() => setHoverLine(true)}
          onMouseLeave={() => setHoverLine(false)}
        >
          {element.symbol} {element.title}
          {hoverLine && <div className="copy">Click to copy !</div>}
        </div>
      ))}
    </div>
  );
};

export default Line;
