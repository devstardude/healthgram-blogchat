import React from "react";
import StripContainer from "../StripContainer/StripContainer";
import Dev from "./Dev";

//import'./DevInfo.css';

const DevInfo = (props) => {
  return (
    <React.Fragment>
      <StripContainer>
        <Dev />
        <Dev />
        <Dev />
      </StripContainer>
      <StripContainer bgColor="#ffffff" >
      </StripContainer>
    </React.Fragment>
  );
};

export default DevInfo;
