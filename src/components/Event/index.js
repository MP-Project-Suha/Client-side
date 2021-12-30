import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
//for Date format
import Moment from "react-moment";
import "./style.css";
import PostTicket from "../PostTicket";
import { useDispatch, useSelector } from "react-redux";
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
  // console.log(state.reducerLog.user);
  const getEvent = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/event/${eventId}`
      );
      // console.log("result",result.data);
      if (result.data) {
        setEvent(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(event);
  return (
    <div className="myEvent">
      {/* banner */}
      <div className="myEvent">
        <div className="cont"></div>
      </div>
      {/* main */}
      {event&& !event ? <main className="event card">  <img id="loading" src="https://i.pinimg.com/originals/1e/5c/0b/1e5c0bc454c49fb59a58a19f378d64e6.gif" /> </main>:
      <main className="event card">

        <p> title: {event && event.title} </p>
        <p> longDisc: {event && event.longDisc} </p>
        <p> shortDisc: {event && event.shortDisc} </p>
        <p>
          {" "}
          price: {event && event.price}
          {" RS "}
        </p>
        <p> location: {event && event.location} </p>
        <p>
          {" "}
          beginAt:{" "}
          <Moment format="D MMM YYYY" withTitle>
            {event && event.beginAt}
          </Moment>
        </p>
        <p>
          {" "}
          endAt:{" "}
          <Moment format="D MMM YYYY" withTitle>
            {event && event.endAt}
          </Moment>
        </p>
        <p>
          {" "}
          startTime:{" "}
          <Moment format="hh:mm a" withTitle>
            {event && event.startTime}
          </Moment>
        </p>
        <p>
          {" "}
          endTime:{" "}
          <Moment format="hh:mm a" withTitle>
            {event && event.endTime}
          </Moment>
        </p>
        {state.reducerLog.user ? (
          event &&
          (event &&
          event.createdBy._id == state.reducerLog.user._id &&
          !event.isPublic) ? (
            event.isVerified ? (
              <>
                {" "}
                <h1
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator(`/GuestList/${event._id}`);
                  }}
                >
                  Enter your guest List{" "}
                </h1>
              </>
            ) : (
              <lable className="status">pending</lable>
            )
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {state.reducerLog.user? (
          event && event.createdBy._id === state.reducerLog.user._id ? (
          <lable className="status"> {event.isVerified? "Verified":"Pending"}</lable>
          ) : (
            <button
            className="btn"
              onClick={(e) => {
                e.preventDefault();
                navigator(`/PostTicketSuccess/${event._id}`)
              }}
            >
              Get Ticket
            </button>
          )
        ) : 
        <button
        className="btn"
          onClick={(e) => {
            e.preventDefault();
            navigator(`/postTicket/${event._id}`)
          }}
        >
          Get Ticket
        </button>
        }
     
      </main>
    }
    </div>
  );
};

export default Event;
