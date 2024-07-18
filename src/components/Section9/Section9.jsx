import React from "react";
import Section9_slider from "./Section9_slider";

const Section9 = () => {
  return (
    <div className="section9_outer">
      <div className="section9_heading">
        <div>Valuable</div>
        <div className="Reviews">Reviews</div>
      </div>

      <img src="./Assets/Photos/purple_back.png" className="section9_temp_background" />

      <div className="reviews_div">reviews div</div>

      <Section9_slider />
    </div>
  );
};

export default Section9;
