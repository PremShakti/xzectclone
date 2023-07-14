import React from "react";

const Card = ({ src, text, link }) => {
  return (
    <div className="card">
      <img src={src} />

      <h2>{text}</h2>
      <a href={link}>Get Started</a>
    </div>
  );
};

export default Card;
