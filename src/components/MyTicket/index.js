import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
// style
import "./style.css";

const MyTicket = ({ ticket, getMyTickets }) => {


  return (
    <Link className="ticket" to={`/ticket/${ticket._id}`}>
    <div className="card flexTicket">
        <p>{ticket.event.title}</p>
        <QRCode
          value={`http://localhost:3000/` + `TicketReader` + `/` + ticket._id}
        />
    </div>
    </Link>
  );
};

export default MyTicket;
