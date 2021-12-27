import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// style
import "./style.css";

const MyTicket = ({ticket,getMyTickets}) => {
    useEffect(() => {
        getMyTickets();
      }, []);
    return (
        <div>
                  <Link to={`/ticket/${ticket._id}`}>
        <p>{ticket.event.title}</p>
      </Link>
        </div>
    )
}

export default MyTicket
