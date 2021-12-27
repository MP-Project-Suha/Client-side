import React from "react";
import { Link } from "react-router-dom";

// style
import "./style.css";

const MyEvent = ({ event }) => {
  console.log(event);
  return (
    <div className="event">
      <Link to={`/Event/${event._id}`}>
        <p>{event.title}</p>
        </Link>
        <label className={event.isVerified? "":"status"}>{event.isVerified? "":"pending"}</label>
      
 
    </div>
  );
};

export default MyEvent;
