import React from "react";

const Template = (props) => {
  console.log("log from template " , props.im);
  return (
    <div className="card_outer">

      <img src={`./Assets/Photos/${props.im}`} className="temp_img" />

      <div className="card_body">
        <div className="card_title">{props.tit}</div>
        <p className="cardd_data">{props.dat}.</p>
      </div>
    </div>
  );
};

export default Template;
