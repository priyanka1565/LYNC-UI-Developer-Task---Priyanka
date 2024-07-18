import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-solid-svg-icons";

const Section10 = () => {
  return (
    <div className="section10_outer_div">
      <img
        src="./Assets/Photos/Community_Pattern.png"
        alt="members"
        className="members_ring"
      />
      <img src="./Assets/Photos/purple_back.png" alt="pruple_back" className="s10_background" />

      <div className="center_div">
        <div className="strongest">Strongest Web3</div>
        <div className="community">Community</div>
        <button className="telegram_logo_bttn">Join Telegram</button>
      </div>
    </div>
  );
};

export default Section10;
