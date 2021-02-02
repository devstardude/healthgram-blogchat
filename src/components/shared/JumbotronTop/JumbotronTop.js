import React from "react";

import'./JumbotronTop.css';

const JumbotronTop = (props) => {
  return (
    <div>
      <div
        className="jumbotron d-flex align-items-center LoginBanner"
        style={{ height: `${props.jumboHeight}vh`}}
      >
        <div className="container-fluid mx-5 px-5">
          <div className="row pt-5">
            <div className="col-sm-12 my-auto">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumbotronTop;
