import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
//for Date format
import Moment from "react-moment";
import "./style.css";
import PostTicket from "../PostTicket"
const Event = () => {
  const { eventId } = useParams();

  const [event, setEvent] = useState(null);
 const navigator =useNavigate()|
  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/event/${eventId}`
      );

      if (result.data) {
        setEvent(result.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
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
<PostTicket eventId={eventId}/>
  
    </div>
  );
};

export default Event;
