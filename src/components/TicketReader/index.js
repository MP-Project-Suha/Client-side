import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
//style
import "./style.css";
import { useParams } from "react-router";

const TicketReader = () => {
  const { ticket } = useParams();
  const [message, setMessage] = useState("");
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });
  useEffect(() => {
    getTicket();
    // eslint-disable-next-line
  }, []);

  const getTicket = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/readTicket/${ticket}`,
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );

      console.log("result", result);
      if (result.status === 200) {
        setMessage(result.data);
        if (result.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${result.data}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.log("error getTicket", error);
      setMessage(error.response.data);

      Swal.fire({
        icon: "error",
        title: `${error.response.data}`,
        text: `Expired or Deleted Ticket`,
      });
    }
  };

  return (
    <div>
      <div className="myEvent"></div>

      <main className="event card contentEvent">{message ? message : ""}</main>
    </div>
  );
};

export default TicketReader;
