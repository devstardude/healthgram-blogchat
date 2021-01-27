import React from "react";
import PicOne from "../../../../assets/images/pic01.jpg";
import PicTwo from "../../../../assets/images/pic002.jpg";
import RoundImage from "../../../shared/RoundImage";
import StripContainer from "../StripContainer/StripContainer";
//import'./AppInfo.css';

const AppInfo = (props) => {
  return (
    <div>
      <StripContainer>
        <div className="col-md-4 col-12 Center p-md-5 ">
          <RoundImage url={PicOne} size="18" />
        </div>
        <div className="col-md-8 col-12 p-md-5">
          <div className="py-4">
            <h3>See Health Related Post From All Around The World.</h3>
            <p className="mt-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi
              neque, euismod at dignissim quis, interdum in ligula. Proin
              convallis leo nec sodales mattis. Duis auctor, urna at rhoncus
              pellentesque, felis purus semper purus, quis facilisis quam massa
              id nisl. Vivamus semper diam mi, quis lobortis magna pretium et.
              Ut id nisl a nisi blandit accumsan. Pellentesque dapibus purus
              eget massa pulvinar, eu semper tellus luctus. Duis pulvinar a ex a
              consequat. Ut consequat nunc nec nisi tincidunt rutrum. Aenean
              tincidunt dui sit amet ex finibus, ac consequat lectus tincidunt.
              Sed eu sagittis lectus. Mauris sodales sollicitudin elit, nec
              tempus.{" "}
            </p>
          </div>
        </div>
      </StripContainer>
      <StripContainer bgColor="#67cbfd">
        <div className="col-md-4 col-12 Center p-md-5 order-2 ">
          <RoundImage url={PicTwo} size="18" />
        </div>
        <div className="col-md-8 col-12 p-md-5 order-1">
          <div className="py-4">
            <h3>See Health Related Post From All Around The World.</h3>
            <p className="mt-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi
              neque, euismod at dignissim quis, interdum in ligula. Proin
              convallis leo nec sodales mattis. Duis auctor, urna at rhoncus
              pellentesque, felis purus semper purus, quis facilisis quam massa
              id nisl. Vivamus semper diam mi, quis lobortis magna pretium et.
              Ut id nisl a nisi blandit accumsan. Pellentesque dapibus purus
              eget massa pulvinar, eu semper tellus luctus. Duis pulvinar a ex a
              consequat. Ut consequat nunc nec nisi tincidunt rutrum. Aenean
              tincidunt dui sit amet ex finibus, ac consequat lectus tincidunt.
              Sed eu sagittis lectus. Mauris sodales sollicitudin elit, nec
              tempus.{" "}
            </p>
          </div>
        </div>
      </StripContainer>
    </div>
  );
};

export default AppInfo;
