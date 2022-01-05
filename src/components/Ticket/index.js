import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Moment from "react-moment";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import axios from "axios";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import QR from "../QR";
import TicketReader from "../TicketReader";
const Ticket = () => {
  const location = useLocation();
  console.log(location);
  console.log(location);
  const [url, setUrl] = useState("");
const navigator = useNavigate()
  const { _id } = useParams(); //ticket id
  const [ticket, setTicket] = useState(null);
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  useEffect(() => {
    getTicket();
  }, []);

  const getTicket = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/myTicket/${_id}`
      );

      if (result.data) {
        console.log(result.data.result);
        setTicket(result.data.result);
        setUrl(
          `http://localhost:3000/` +
            `TicketReader` +
            `/` +
            result.data.result._id
        );
        
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <div className="myEvent"></div>
      {ticket && (
        <main className="event card contentEvent">
          <h1>{ticket.event.title}</h1>
          <QRCode value={url} />


<hr/>
{/* <img src={ticket.event.image} /> */}
          <p>
            <b>{ticket.event.title}:</b> {ticket.event.shortDisc}{" "}
          </p>

          <p> Event will be in {ticket.event.location} </p>
          <p>
            <Moment format="D MMM YYYY" withTitle>
              {ticket.event.beginAt}
            </Moment>{" "}
            until{" "}
            <Moment format="D MMM YYYY" withTitle>
              {ticket.event.endAt}
            </Moment>
            <span> : </span>
            Begin at
            <Moment format="hh:mm a" withTitle>
              {ticket.event.startTime}
            </Moment>{" "}
            and end at:{" "}
            <Moment format="hh:mm a" withTitle>
              {ticket.event.endTime}
            </Moment>
          </p>
        </main>
      )}
    </div>
  );
};

export default Ticket;
