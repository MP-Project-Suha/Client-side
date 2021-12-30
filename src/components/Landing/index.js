import React from "react";
import { Link } from "react-router-dom";
import PublicEvent from "../PublicEvent";
import "./style.css";

const Landing = ({events , allPublicEvents}) => {
  return (
    <div className="contain">
      {/* banner */}
      <div className="banner">
        <div className="contHome">

          <span>Eventi</span>
          <p>Ticket application</p>
        </div>
      </div>
      {/* main */}
      <main>
        
      <h2>Meet Our Official Sponsors & Partners</h2>
        {events && events.length ? (
          events.map((elem) => (
            <PublicEvent event={elem} allPublicEvents={allPublicEvents} />
          ))
        ) : (
          <img id="loading" src="https://i.pinimg.com/originals/1e/5c/0b/1e5c0bc454c49fb59a58a19f378d64e6.gif" />
        )}
      </main>
      </div>
  );
};

export default Landing;
