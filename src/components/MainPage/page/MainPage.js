import React, { useState } from "react";
import JumbotronTop from "../../shared/JumbotronTop/JumbotronTop";
import ChatIcon from "@material-ui/icons/Chat";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import "./MainPage.css";
import { useParams } from "react-router-dom";
import PostDiv from "../components/PostDiv/PostDiv";
import ChatDiv from "../components/ChatDiv/ChatDiv";
import RoomLinks from "../components/RoomLinks/RoomLinks";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

const MainPage = (props) => {
  const [showPost, setShowPost] = useState(true);
  const routeId = useParams().routeId;
  const postsRef = firestore.collection(`posts-${routeId}`);
  const query = postsRef.orderBy("createdAt")
  const [allPosts] = useCollectionData(query, { idField: "uid" });
 

  const postIconHandler = () => {
    setShowPost(true);
  };
  const chatIconHandler = () => {
    setShowPost(false);
  };

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
            <LibraryBooksIcon
              className="MainIcons"
              fontSize="large"
              onClick={postIconHandler}
            />
          </div>
          <div className="col-6">
            <ChatIcon
              className="MainIcons"
              fontSize="large"
              onClick={chatIconHandler}
            />
          </div>
        </div>
        {/* Main Div  */}
        <div className="container-fluid m-0 p-0 alert-dark MainDiv">
          <div className="conatiner-fuild p-0 alert-light SecondaryDiv">
            {/* Left Links  */}
            <div className="row h-100 p-4">
              <RoomLinks />
              {/* Right Div  */}
              {showPost ? (
                <PostDiv posts={allPosts} />
              ) : (
                <ChatDiv route={routeId} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
