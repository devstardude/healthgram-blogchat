import React from "react";
import JumbotronTop from "../shared/JumbotronTop";
import ChatIcon from "@material-ui/icons/Chat";
import Button from "@material-ui/core/Button";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import "./MainPage.css";
import { Link } from "react-router-dom";
import PostCards from "./PostCards/PostCards";

const MainPage = (props) => {
  return (
    <div className="MainPage">
      <JumbotronTop jumboHeight="25">
        <h2 className="Center pt-3" style={{ fontWeight: "bold" }}>
          Let's Make The World A Better Place.
        </h2>
      </JumbotronTop>
      <div className="container-fluid m-0 p-0 alert-dark">
        {/* Icons Div  */}
        <div className="row w-50 py-2 Center mx-auto">
          <div className="col-6">
            <LibraryBooksIcon className="MainIcons" fontSize="large" />
          </div>
          <div className="col-6">
            <ChatIcon className="MainIcons" fontSize="large" />
          </div>
        </div>
        {/* Main Div  */}
        <div className="container-fluid m-0 p-0 alert-dark MainDiv">
          <div className="conatiner-fuild p-0 alert-light SecondaryDiv">
            {/* Left Links  */}
            <div className="row h-100 p-5">
              <div className="col-1 MainPageLeftLinks">
                <div class="d-flex flex-column bd-highlight mb-3">
                  <div class="py-1 bd-highlight">
                    <Button>Global</Button>
                  </div>
                  <div class="py-1 bd-highlight">
                    <Button>Global</Button>
                  </div>
                  <div class="py-1 bd-highlight">
                    <Button>Global</Button>
                  </div>
                </div>
              </div>
              {/* Right Div  */}
              <div className="col-11 MainPosts">
                <div className="row">
                  <div className="col-12 Center">
                    <h2>Global Posts</h2>
                    <hr />
                  </div>
                  <div className="col-12 p-4">
                    <div className="row">
                      <div className="col-4 p-3">
                        <PostCards />
                      </div>
                      <div className="col-4 p-3">
                        <PostCards />
                      </div>
                      <div className="col-4 p-3">
                        <PostCards />
                      </div>
                      <div className="col-4 p-3">
                        <PostCards />
                      </div>
                      <div className="col-4 p-3">
                        <PostCards />
                      </div>
                      <div className="col-4 p-3">
                        <PostCards />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
