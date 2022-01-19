import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import Moment from "react-moment";
import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'
import { GrDocumentPdf} from "react-icons/gr"
// style
import "./style.css";

const MyTicket = ({ ticket, getMyTickets }) => {
  function printPDF () {
    const domElement = document.getElementById(`ticket${ticket._id}`)
    html2canvas(domElement, { onclone: (document) => {
      document.getElementById('print-button').style.visibility = 'hidden'
    }})
    .then((canvas) => {
        const img = canvas.toDataURL('image/png')
        const pdf = new jsPdf()
        pdf.addImage(img, 'JPEG', 5, 5,200, 100)
        pdf.save(`ticket-${ticket._id}.pdf`)
       
  })
}

  return (
    <div className="ticketContainer">
    {/* <Link
    id={`ticket${ticket._id}`}
      className="ticket"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${ticket.event.image})`,
      }}
      to={`/ticket/${ticket._id}`}
    > */}

 
<div     id={`ticket${ticket._id}`}
      className="ticket"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${ticket.event.image})`,
      }}>
     
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
        <Link className="buy" to={`/Event/${ticket.event._id}`}>
          Event Details
        </Link>
      </div>
      </div>
    {/* </Link> */}
    <button className="pdf" id="print-button" onClick={(e)=>{
      e.preventDefault()
      printPDF()}}>Print  <GrDocumentPdf className="icon"/></button>
    </div>
  );
};

export default MyTicket;
