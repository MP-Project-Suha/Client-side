import React from "react";
import { Link } from "react-router-dom";

// style
import "./style.css";

const PublicEvent = ({ event }) => {

  return (
    < div className="card">
      <Link to={`/Event/${event._id}`}>
        <img className="imgEvent" src="https://washington.org/sites/default/files/styles/generic_hero_banner_1440_x_600/public/studio_maceo_pic9.png?h=fa315e29&itok=HonZXf28"/>
        <p>{event.title}</p>

      </Link>
    </div>
  );
};

export default PublicEvent;
