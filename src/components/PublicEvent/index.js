import React from "react";
import { Link } from "react-router-dom";

// style
import "./style.css";

const PublicEvent = ({ event }) => {

  return (
    < div className="card">
      <Link className="cardLink" to={`/Event/${event._id}`}>
        <img className="imgEvent" src={event.image}/>
        <h1>{event.title}</h1>

      </Link>
    </div>
  );
};

export default PublicEvent;
