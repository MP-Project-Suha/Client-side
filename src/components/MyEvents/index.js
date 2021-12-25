import React, { useEffect } from "react";
import MyEvent from "../MyEvent";
import "./style.css";
const MyEvents = ({ myEvents, getMyEvents }) => {
  useEffect(() => {
    getMyEvents();
  }, []);
  return (
    <div>
      <div>
        {myEvents && myEvents.length ? (
          myEvents.map((elem) => (
            <MyEvent key={`event${elem._id}`}event={elem} getMyEvents={getMyEvents} />
          ))
        ) : (
          <img src="https://i.pinimg.com/originals/1e/5c/0b/1e5c0bc454c49fb59a58a19f378d64e6.gif" />
        )}
      </div>
    </div>
  );
};

export default MyEvents;
