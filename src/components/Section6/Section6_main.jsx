import React from "react";
import Template from "./Template";
import suite from "./Suite_Object";

const Section6_main = () => {

  // thsi function return individual template card 
  const call_the_temp = (d) => {
    return <Template i={d.id} im={d.photo} dat={d.data} tit={d.title} />;
  };

  return (
    <div className="section6_outer_div">
      <div className="section6_heading">
        <div className="_6product">Product</div>
        <div className="_6suite"> Suite</div>
      </div>

      <img src="./Assets/Photos/background_section4.png" className="back_purple_imgs6"/>

      <div className="templates_flex">{suite.map(call_the_temp)}</div>
    </div>
  );
};

export default Section6_main;
