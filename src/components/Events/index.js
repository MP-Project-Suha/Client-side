
import React, { useEffect } from "react";

import "./style.css";
const Events = ({ events, allPublicEvents }) => {
  useEffect(() => {
    allPublicEvents();
  }, []);
  return (
    <div>
      <div >
        {events && events.length ? (
          events.map((elem) => (
           <p>{elem.title}</p>
          ))
        ) : (
          <img
            src="https://i.pinimg.com/originals/1e/5c/0b/1e5c0bc454c49fb59a58a19f378d64e6.gif"
          />
        )}
      </div>
    </div>
  );
};

export default Events;