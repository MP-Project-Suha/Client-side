import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Moment from "react-moment";
import QRCode from "react-qr-code";
import axios from "axios";
import "./style.css";

const Ticket = () => {
  const [url, setUrl] = useState("");
  const { _id } = useParams(); //ticket id
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    getTicket();
    // eslint-disable-next-line
  }, []);

  const getTicket = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/myTicket/${_id}`
      );

      if (result.data) {
        setTicket(result.data.result);
        setUrl(
          `https://eventi-webapp.herokuapp.com/` +
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
      <div className="myEvent "></div>
      {ticket && (
        <main className="event card contentEvent">
          <div className="rightTicket">
            <QRCode value={url} />
          </div>
          <div className="leftTicket">
            <h1>{ticket.event.title}</h1>

            <hr />
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
          </div>
        </main>
      )}
    </div>
  );
};

export default Ticket;
