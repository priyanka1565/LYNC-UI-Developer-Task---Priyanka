import React from "react";

const Flex_part2 = () => {
  return (
    <div className="flex_part2_outer">
      <div className="flex_part2">
        <div className="sub_div">
          <div className="numbers_1"> 200+</div>
          <div className="sub_div_text">
            Projects have <br /> downloaded & <br /> integrated LYNC SDKs
          </div>
        </div>
        <div className="sub_div">
          <div className="numbers_2"> 8000+</div>
          <div className="sub_div_text">
            Contracts have been <br /> deployed via LYNC
          </div>
        </div>
      </div>

      <div>
        <div className="sub_div">
          <div className="numbers_3"> 500000+</div>
          <div className="sub_div_text">User ops created in 10 hours</div>
          <div className="crypto_img_outer_div">
          <img src="./Assets/Photos/crypt_wallet.png" className="crypto_wallet_img" />

          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Flex_part2;
