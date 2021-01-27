import React from "react";
import { Link, Redirect } from "react-router-dom";
// import "./Login.css";
import * as db from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import JumbotronTop from "../shared/JumbotronTop";

const auth = firebase.auth();
const jumbo = {
  title: "Before Login",
  subtext:
    "Please don't use inappropriate language in chat section because that might lead to immediate ban and also don't share any personal information that can lead to fraud or any type of abuse.",
};
const Login = (props) => {
  const [user] = useAuthState(auth);
  if (user) {
    return <Redirect to="/mainpage" />;
  } else {
    return (
      <div>
        <JumbotronTop jumboHeight="50">
          <h2 style={{ fontWeight: "bold" }}>{jumbo.title}</h2>
          <h4>{jumbo.subtext}</h4>
        </JumbotronTop>
        <div className="Center mt-4">
          <div className="card text-center mx-auto" style={{ width: "18rem" }}>
            <div className="card-header">Let's Go</div>
            <div className="card-body">
              <h5 className="card-title">Login With Google</h5>
              <p className="card-text">
                Only your Email, Username and Display Picture will be used.
                <br /> We respect your Privacy.
              </p>
              <Link
                to="/login"
                className="btn btn-primary"
                onClick={db.signInWithGoogle}
              >
                Click Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
