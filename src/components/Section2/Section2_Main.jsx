import React from "react";



const Section2_Main = () => {
  return (
    <div className="section2_main_outer_div">
      {/* background image  */}
      <img src="./Assets/Photos/BG Pattern.png" className="section2_bg_img" />

      {/* big text  */}
      <div className="section2_main_text">
        <div data-aos="slide-left" data-aos-offset="200"> Launch Your Game</div>
        <div data-aos="slide-right" data-aos-offset="200">
          {" "}
          on <p className="Web3.0">Web 3.0 </p> in Minutes{" "}
        </div>
      </div>

      {/* small text  */}
      <div className="main_text2">
        <div> We help game developers to launch their game on Web 3.0,</div>
        <div>by keepingblockchain complexities aside with WebWorld SDKs!</div>
      </div>

      {/* bttn row  */}
      <div className="bttn_row">
        <div>
          <button className="section2_bttn1">
            {" "}
            Get started
           
          </button>
        </div>

        <div>
          <button className="section2_bttn2">
            {" "}
            View Docs

          </button>
        </div>

      </div>
    </div>
  );
};

export default Section2_Main;
