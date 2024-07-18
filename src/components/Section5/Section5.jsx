import React from "react";
import Section5_ul from "./Section5_ul";
import Section5_flex from "./Section5_flex";

const Section5 = () => {
  return (
    <div className="section5_outer">
      <img
        src="./Assets/Photos/background_section4.png"
        alt="section4 background"
        className="background_img_section5"
      />

      <div className="section5_text_content">
        <div className="text_1">Power Up Your Web3 Game </div>
        <div className="text_flex">
          <div className="text_1">Development, With </div>
          <p>LYNC SDKs</p>
        </div>

        <div className="small_text_flex">
          <div>
            LYNC SDKs can be easily integrated into game engines like Unity 3D{" "}
          </div>
          <div>and Unreal Engine in a few clicks.</div>
        </div>
      </div>

      <Section5_ul />
      <Section5_flex/>



      
    </div>
  );
};

export default Section5;
