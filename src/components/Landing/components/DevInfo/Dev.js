import React from "react";
import RoundImage from "../../../shared/RoundImage";
import devOne from "../../../../assets/images/pic03.jpg"
//import'./Dev.css';

const Dev = (props) => {
  return (
    <div className="col-12 col-md-4 Center p-md-5">
      <RoundImage url={devOne} size="12" />
      <p className="mt-4">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
        Lorem ipsum Lorem ipsum Lorem ipsum{" "}
      </p>
    </div>
  );
};

export default Dev;
