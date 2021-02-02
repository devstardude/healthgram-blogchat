import React from "react";
import StripContainer from "../StripContainer/StripContainer";
import Dev from "./Dev";
import Gintoki from "../../../../assets/images/gintoki.jpg"
import Shinpachi from "../../../../assets/images/shinpachi.jpg"
import Kagura from "../../../../assets/images/kagura.jpg"
//import'./DevInfo.css';

const devinfo = [
  {
    name: "Naman Girdhar",
    info:
      "Full-stack Web Application Developer and designer, Proficient in React, Node.js, MongoDB, Express.js, and many More",
    url: Shinpachi,
  },
  {
    name: "Arun Shekhar",
    info:
      "Same as guy before me",
    url: Gintoki,
  },
  {
    name: "Anjali Singh",
    info:
      "My Answer is also same, No difference.",
    url: Kagura,
  },
];


const DevInfo = (props) => {
  return (
    <React.Fragment>
      <StripContainer>
      {devinfo.map(dev=>(
        <Dev name={dev.name} info={dev.info} url={dev.url}/>
      ))}
      </StripContainer>
 
    </React.Fragment>
  );
};

export default DevInfo;
