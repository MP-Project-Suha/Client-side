import React, { useEffect } from "react";
import PublicEvent from "../PublicEvent";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
const PublicEvents = ({ events, allPublicEvents }) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  useEffect(() => {
    allPublicEvents();
  }, []);
  return (
    <div>
            {/* banner */}
            <div className="myEvent">
        <div className="cont">
          <p>
            <Link to="/">  Home </Link> - {splitLocation[1]}
          </p>
          <span>{splitLocation[1]}</span>
        </div>
      </div>
{/* main */}
      <main>
        {events && events.length ? (
          events.map((elem) => (
            <PublicEvent event={elem} allPublicEvents={allPublicEvents} />
          ))
        ) : (
          <img src="https://i.pinimg.com/originals/1e/5c/0b/1e5c0bc454c49fb59a58a19f378d64e6.gif" />
        )}
      </main>
    </div>
  );
};

export default PublicEvents;
