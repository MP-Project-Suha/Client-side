import React, { useEffect } from "react";
import PublicEvent from "../PublicEvent";
import "./style.css";
const PublicEvents = ({ events, allPublicEvents }) => {
  useEffect(() => {
    allPublicEvents();
  }, []);
  return (
    <div>
      <div>
        {events && events.length ? (
          events.map((elem) => (
            <PublicEvent event={elem} allPublicEvents={allPublicEvents} />
          ))
        ) : (
          <img src="https://i.pinimg.com/originals/1e/5c/0b/1e5c0bc454c49fb59a58a19f378d64e6.gif" />
        )}
      </div>
    </div>
  );
};

export default PublicEvents;
