import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight ,faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar_ext">
      <div class="navbar_outer_div">
        {/* this will be displayed when ,when screen size is less than 950 */}
        <div class="dropdown">
          <button class="dropbtn">
            {" "}
            <FontAwesomeIcon icon={faBars} className="three_bars" />
          </button>
          <div class="dropdown-content">
            <a href="#">Home</a>
            <a href="#">Documentation</a>
            <a href="#">Blogs</a>
            <a href="#">LYNC Portal</a>
            <a href="#">Request a demo</a>
          </div>
        </div>
        {/* logo and href div  */}
        <div className="group_left">
          <img
            src="https://lync.world/app/assets/lync-white.png"
            className="navbar_company_logo"
          />

          <div className="group2_middle">
            <a href="#">Home</a>
            <a href="#">Documentation</a>
            <a href="#">Blogs</a>
            <a href="#">LYNC Portal</a>
            <a href="#">Request a demo</a>
          </div>
        </div>

        {/* bttn div  */}
        <div>
          <button className="navbar_bttn">
            {" "}
            Get started
            <FontAwesomeIcon icon={faArrowRight} className="arrow_right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
