import React from "react";

//import'./StripContainer.css';

const StripContainer = (props) => {
  return (
    <div
      className={`container-fluid m-0 py-4 ${props.outerClass}`}
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      <div className={`container ${props.innerClass}`}>
        <div className="row">{props.children}</div>
      </div>
    </div>
  );
};

export default StripContainer;
