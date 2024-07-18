import React from "react";

import Left_Part from "./Left_Part";
import Middle_Part from "./Middle_Part";
import End_Part from "./End_Part";

export const Footer_Lower_Part = () => {
  return (
    <div className="footer_lower_part_outer_div">
      <div className="first">
        <Left_Part />
        <Middle_Part />
      </div>

      <End_Part />
    </div>
  );
};
