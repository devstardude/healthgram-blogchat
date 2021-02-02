import React from "react";
import StripContainer from "../StripContainer/StripContainer";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";
//import'./BottomLinks.css';

const BottomLinks = (props) => {
  return (
    <div>
      <StripContainer bgColor="#ffffff">
        <div className="container-fluid Center p-5">
          <div className="SocialMediaLinks p-3 mb-2">
            <Link
              className="SocialMediaLinks"
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <MailIcon className="mx-3" />
            </Link>
            <Link
              className="SocialMediaLinks"
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <FacebookIcon className="mx-3" />
            </Link>
            <Link
              className="SocialMediaLinks"
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <InstagramIcon className="mx-3" />
            </Link>
            <Link
              className="SocialMediaLinks"
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <TwitterIcon className="mx-3" />
            </Link>
          </div>
          Made with Care 💙
        </div>
      </StripContainer>
    </div>
  );
};

export default BottomLinks;
