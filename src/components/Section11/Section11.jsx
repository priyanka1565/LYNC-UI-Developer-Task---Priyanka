import React from "react";
import Partners_Array from "./Partners_Array";

const Section11 = () => {

  
  return (
    <div className="section11_outer">
                <img src="./Assets/Photos/purple_back.png" alt="pruple_back" className='SEC111_BG' />
      <div className="section11_heading">
        <div className="our">Our</div>
        <div className="partners">Beliefs and Partners</div>
      </div>

      <div className="partners_grid">
    {Partners_Array.map((v, index) => (
        <div key={index} className="individual_partner_div">
            <img src={`./Assets/Photos/${v.photo}`} alt={`Partner ${index}`} className="partner_img" />
        </div>
    ))}
</div>


    </div>
  );
};

export default Section11;
