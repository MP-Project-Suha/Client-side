import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import Moment from "react-moment";
// style
import "./style.css";

const MyTicket = ({ ticket, getMyTickets }) => {
  return (
    <Link
      className="ticket"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${ticket.event.image})`,
      }}
      to={`/ticket/${ticket._id}`}
    >
      <div className="date">
        <span className="day">
          <Moment format="D" withTitle>
            {ticket.event.beginAt}
          </Moment>
        </span>
        <span className="month-and-time">
          {" "}
          <Moment format="MMM" withTitle>
            {ticket.event.beginAt}
          </Moment>{" "}
          <br />
          <span class="small">
            {" "}
            <Moment format="hh A" withTitle>
              {ticket.event.startTime}
            </Moment>{" "}
          </span>
        </span>
      </div>

      <div className="artist">
        <span className="name">{ticket.event.title}</span>
        <br />
        <span className="live small"></span>
      </div>

      <div className="flexx">
   
          <div className="locationBefore">
            <QRCode
              value={
                `https://eventi-webapp.herokuapp.com/` +
                `TicketReader` +
                `/` +
                ticket._id
              }
              size="110"
            />
            
            <p className="id">{ticket._id}</p>
          </div>
          <br />
          <div className="location">
          <span className="small">{ticket.event.location}</span>
        </div>
      </div>

      <div className="rip"></div>

      <div className="cta">
        <Link className="buy" to={`/ticket/${ticket._id}`}>
          Event Details
        </Link>
      </div>
    </Link>
  );
};

export default MyTicket;
