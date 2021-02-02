import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom"
//import'./RoomLinks.css';

const routes = [
  {
    value: "global",
    label: "Global",
  },
  {
    value: "room1",
    label: "Room 1",
  },
  {
    value: "room2",
    label: "Room 2",
  },
  {
    value: "room3",
    label: "Room 3",
  },
  {
    value: "room4",
    label: "Room 4",
  },
  {
    value: "room5",
    label: "Room 5",
  },
];

const RoomLinks = (props)=>{
    return (
      <div className="col-1 MainPageLeftLinks">
        <div className="d-flex flex-column bd-highlight mb-3">
          <div className=" bd-highlight">
            {routes.map((route) => (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/mainpage/${route.value}`}
              >
                <Button className="my-2">{route.label}</Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
};

export default RoomLinks ;