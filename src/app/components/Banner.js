import React from "react";

import Btn from "./Btn";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="bannerFlex">
        <div className="bannerLeft">
          <h2 className="taglines">
            <span className="tag1">Build, </span>
            <span className="tag2">test, </span>
            <span className="tag3">and </span>
            <span className="tag4">execute your ideas </span>
            <span className="tag3">with our</span>
            <span className="tag5"> innovative solutions.</span>
          </h2>
        </div>

        <div className="bannerRight">
          <div class="box">
            <div class="face front">Front</div>
            <div class="face back">Back</div>
            <div class="face left">Left</div>
            <div class="face right">Right</div>
            <div class="face top">Top</div>
            <div class="face bottom">Bottom</div>
          </div>
        </div>
      </div>

      <div className="bannerBtn">
        <Btn
          sowIcon={true}
          text={"Chat now on Whatsapp"}
          bg={"#075e54"}
          border={"2px solid #075e54"}
          color={"white"}
        />
        <Btn
          sowIcon={false}
          text={"Explore Our Service"}
          bg={"#1d2233"}
          border={"2px solid #5e76fd"}
          color={"white"}
        />
      </div>
    </div>
  );
};

export default Banner;
