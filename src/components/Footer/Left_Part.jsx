import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Left_Part = () => {
  return (
    <div className="left_part">
      <div>
        <img src="./Assets/Photos/logo_last.png" alt="logo" className="logo_last" />
      </div>
      <div>A Game Infrastructure</div>

      <div className="icons_row">
        <div className="icons_div">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>

        <div className="icons_div">
          <FontAwesomeIcon icon={faDiscord} />
        </div>
        <div className="icons_div">
          <FontAwesomeIcon icon={faTwitter} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Left_Part;
