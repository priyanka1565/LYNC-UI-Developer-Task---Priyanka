import React from "react";
import Section4_Part2 from "./Section4_Part2";

const Section4main = () => {
  return (
    <div className="section4_outer_div">
      <hr />
      <div className="section4_main_text ">
        <div className="text_part1">
          {" "}
          LYNC provides a scalable infrastructure for launching web3 games,
        </div>
        <div className="text_part2_outer">
          <div> without hampering the </div>
          <p className="text_part2_outer-2"> gaming experience.</p>
        </div>
        <div className="text_part3">
          So that you can deliver the next big hit!
        </div>
      </div>
      <hr />

      <img
        src="./Assets/Photos/background_section4.png"
        alt="section4 background"
        className="background_img_section4"
        
      />
      <Section4_Part2 />

    </div>
  );
};

export default Section4main;
