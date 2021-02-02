import React,{useState} from "react";
import ModalDiv from "../Modal/ModalDiv";
//import'./PostCards.css';

const PostCards = (props) => {
  //Modal Options
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <ModalDiv open={open} handleClose={handleClose} createdAt={props.createdAt}  {...props} />
      <div class="card mx-auto" style={{ width: "16rem" }}>
        <img class="card-img-top" src={props.url} alt="Card" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <button class="btn btn-primary" onClick={handleOpen}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCards;
