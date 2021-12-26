import React from "react";
import { Link } from "react-router-dom";

// style
import "./style.css";

const PublicEvent = ({ event }) => {
  return (
    <>
      <Link to={`/Event/${event._id}`}>
        <p>{event.title}</p>
      </Link>
    </>
  );
};

export default PublicEvent;