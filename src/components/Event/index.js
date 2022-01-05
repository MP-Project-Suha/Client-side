import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import Moment from "react-moment";
//style
import "./style.css";

const Event = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    getEvent();
  }, []);
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  const getEvent = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/event/${eventId}`
      );
      if (result.data) {
        setEvent(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="myEvent">
      {/* banner */}
      <div className="myEvent">
        <div className="cont"></div>
      </div>
      {/* main */}
      {event && (
        <main className="event card contentEvent">
          <h1> {event.title} </h1>
          <img src={event.image} />

          <p>
            {" "}
            <b>{event.title}:</b> {event.longDisc}{" "}
          </p>

          <p> Event will be in {event.location} </p>
          <p>
            <Moment format="D MMM YYYY" withTitle>
              {event.beginAt}
            </Moment>{" "}
            until{" "}
            <Moment format="D MMM YYYY" withTitle>
              {event.endAt}
            </Moment>
            <span> : </span>
            Begin at
            <Moment format="hh:mm a" withTitle>
              {event.startTime}
            </Moment>{" "}
            and end at:{" "}
            <Moment format="hh:mm a" withTitle>
              {event.endTime}
            </Moment>
          </p>
          <p>Price: {event.price} SR</p>
          {state.reducerLog.user ? (
            event.createdBy._id === state.reducerLog.user._id ? ( // check if it is creator or not
              event.isVerified ? (
                <>
                  <h1
                    className="btn"
                    onClick={(e) => {
                      e.preventDefault();
                      navigator(`/GuestList/${event._id}`);
                    }}
                  >
                    Enter your guest List
                  </h1>
                </>
              ) : (
                <label className="status">Pending</label>
              )
            ) : (
              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  event.price
                    ? navigator(`/PostTicket/${event._id}`)
                    : navigator(`/PostTicketSuccess/${event._id}`);
                }}
              >
                Get Ticket
              </button>
            )
          ) : (
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                navigator(`/login`);
              }}
            >
              Get Ticket
            </button>
          )}
        </main>
      )}
    </div>
  );
};

export default Event;
