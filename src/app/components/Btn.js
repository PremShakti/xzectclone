import React from "react";
import { BsWhatsapp } from "react-icons/bs";
const Btn = ({ sowIcon, text, bg, border,color }) => {
  const styleObj = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: bg,
    height: "55px",
    width: "300px",
    color: color,
    border: border ,
    borderRadius: "3px",
    fontSize: "15px",
    fontWeight: "bold",

  };
  return (
    <>
      <div style={styleObj}>
        {sowIcon ? (
          <span style={{ fontSize: "25px" }}>
            <BsWhatsapp />
          </span>
        ) : null}{" "}
        {text}
      </div>
    </>
  );
};

export default Btn;
