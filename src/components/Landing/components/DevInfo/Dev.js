import React from "react";
import RoundImage from "../../../shared/RoundImage/RoundImage";
//import'./Dev.css';

const Dev = (props) => {
  return (
    <div className="col-12 col-md-4 Center p-md-5">
      <RoundImage url={props.url} size="12" />
      <div className="mt-2" style={{fontSize:"1.3rem"}}>{props.name}</div>
      <p className="mt-2">{props.info}
      </p>
    </div>
  );
};

export default Dev;
