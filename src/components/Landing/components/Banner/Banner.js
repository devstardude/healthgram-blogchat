import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div>
      <div className="jumbotron d-flex align-items-center Banner mb-5">
        <div className="container-fluid Center m-0 p-0">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="row">
                <h1>Healthgram</h1>
                <h2>A Health Blog and Chat App</h2>
                <div>
                  <Link to="/login" className="btn btn-primary w-md-50  mt-3">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
