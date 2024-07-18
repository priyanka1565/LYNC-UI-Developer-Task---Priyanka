import React from "react";
import Flex_part2 from "./Flex_part2";

const Section5_flex = () => {
  return (
    <div className="section5_flex_outer">
      <div className="flex_part1">
        <div className="flexPart_1text_and_bttn">
          <div className="text1">
            Elevate Your Gameplay <br /> with Essential Insights!
          </div>
          <div className="text2">
            Unleash Your Potential - <br /> Explore the Knowledge Hub Today!
          </div>
          <div className="bttn_outer_div">
            <button className="view_docs_bttn"> view Docs</button>
          </div>
        </div>
        <img src="./Assets/Photos/controller.png" className="controller_img" />
      </div>
      <Flex_part2 />
      
    </div>
  );
};

export default Section5_flex;
