import React from 'react';
import firebase from "firebase/app";
//import'./ChatMsg.css';
const auth = firebase.auth();
const ChatMsg = (props)=>{
   const { text, uid, photoURL } = props.message;
   const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    return (
      <div className="col-12 m-2 ">
        <div className={`message ${messageClass}`}>
          <img className="Image" src={photoURL} alt="dp.jpg" />
          <p className="ChatText">{text}</p>
        </div>
      </div>
    );
};

export default ChatMsg ;