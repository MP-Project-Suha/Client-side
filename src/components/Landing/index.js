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

          {/* <h1 >Eventi</h1>
          <p>Ticket application</p> */}
        </div>
      </div>
      {/* main */}
      <main>
        <div className="relative">
      <span className="white">Popular</span>
      <h2 className="subTitle">Meet Our Official Sponsors & Partners</h2>
      <p className="nu"> [Catch a Ticket]</p>
      </div>
      <div>

      {events[0].title}
      </div>
        {events && events.length ? (
          events.map((elem,i) => (
          
            <PublicEvent  event={elem} allPublicEvents={allPublicEvents} />
          ))
        ) : (
          <img id="loading" src="https://i.pinimg.com/originals/1e/5c/0b/1e5c0bc454c49fb59a58a19f378d64e6.gif" />
        )}
      </main>
      </div>
  );
};

export default Landing;
