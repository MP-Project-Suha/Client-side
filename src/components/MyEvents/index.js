import React, { useEffect } from "react";
import MyEvent from "../MyEvent";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
const MyEvents = ({ myEvents, getMyEvents }) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  useEffect(() => {
    getMyEvents();
  }, []);
  return (
    <div className="contain">
      {/* banner */}
      <div className="myEvent">
        <div className="cont">
          <p>
            <Link to="/"> Home </Link> - {splitLocation[1]}
          </p>
          <span>{splitLocation[1]}</span>
        </div>
      </div>
      {/* main */}
      <main>
        {myEvents && myEvents.length
          ? myEvents.map((elem) => (
              <MyEvent
                className="subEvent"
                key={`event${elem._id}`}
                event={elem}
                getMyEvents={getMyEvents}
              />
            ))
          : "no events"}
      </main>
    </div>
  );
};

export default MyEvents;
