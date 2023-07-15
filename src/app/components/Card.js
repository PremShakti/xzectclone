import Image from "next/image";
import React from "react";

const Card = ({ src, text, link }) => {
  return (
    <div className="card">
      <div className="inercard">
      <Image width={280} height={200} src={src} className="img" />
      </div>
      <h2>{text}</h2>
      <a href={link}>Get Started</a>
    </div>
  );
};

export default Card;
