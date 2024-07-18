import React from "react";
import Section8_Card_Template from "./Section8_Card_Template";

const Section8main = () => {
  // thsi function return individual template card

  return (
    <div className="section8_div_outer">
      <div className="section8_heading">
        <div>From our</div>
        <div className="blog">Blog</div>
      </div>

      <div className="section8_sub_heading">
        <div className="t1">
          Level Up Your Web3 Gaming Experience: Explore Our
        </div>
        <div className="t1">
          Blog for Insights, Tips, and Innovations in Gaming SDKs!
        </div>
      </div>
      <img src="./Assets/Photos/purple_back.png" className="section8_temp_background" />

      <Section8_Card_Template />
    </div>
  );
};

export default Section8main;
