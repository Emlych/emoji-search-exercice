import React from "react";

const Footer = ({ techno, author }) => {
  return (
    <div className="footer">
      Made with <span>{techno}</span> by <span>{author}</span>
    </div>
  );
};

export default Footer;
