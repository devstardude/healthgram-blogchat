import React from "react";

//import'./RoundImage.css';

const RoundImage = (props) => {
  return (
    <div
      className="card rounded-circle mx-auto"
      style={{ width: `${props.size}rem` }}
    >
      <img
        className="card-img-top p-2 rounded-circle"
        src={props.url}
        alt="Cardcap"
      />
    </div>
  );
};

export default RoundImage;
