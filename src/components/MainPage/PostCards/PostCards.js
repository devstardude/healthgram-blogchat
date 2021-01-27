import React from "react";
import CardPic from "../../../assets/images/pic03.jpg";
//import'./PostCards.css';

const PostCards = (props) => {
  return (
    <div>
      <div class="card mx-auto" style={{ width: "16rem" }}>
        <img class="card-img-top" src={CardPic} alt="Card" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCards;
