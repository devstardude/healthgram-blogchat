import React, { useState, useRef ,useEffect} from "react";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import "./ChatDiv.css";
import ChatMsg from "../ChatMsg/ChatMsg";
import { useCollectionData } from "react-firebase-hooks/firestore";
const auth = firebase.auth();
const firestore = firebase.firestore();

const ChatDiv = (props) => {
  const [formValue, setFormValue] = useState("");
  const route = props.route;
  const dummy = useRef();
  const messagesRef = firestore.collection(`messages-${route}`);
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessage = async (event) => {
    event.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="col-11 ">
      <div className="row">
        <div className="col-12">
          <h2 className="Center">{route.charAt(0).toUpperCase()+route.slice(1)} Chat</h2>
          <hr />
          <div className="row border m-1 ChatContainer">
            <div className="col-12 p-4 ChatMessageContainer  ">
              <div className="container ChatMessageOverflow p-4  Card bg-light shadow-sm h-100">
                <div className="row">
                  {messages &&
                    messages.map((msg) => (
                      <ChatMsg key={msg.id} message={msg} />
                    ))}{" "}
                </div>
                <span ref={dummy}></span>
              </div>
            </div>
            <div className="col-12 px-4 py-1 mb-2">
              <div class="input-group mb-3">
                <input
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  type="text"
                  class="form-control"
                  placeholder="Say Something Nice"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary"
                    disabled={!formValue}
                    type="button"
                    onClick={sendMessage}
                  >
                    Send 🕊️
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDiv;
