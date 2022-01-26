import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
//style
import "./style.css";


const PostTicketSuccess = () => {
  const navigator = useNavigate();
  const { event } = useParams();

  const [message, setMessage] = useState("");

  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  const addTicket = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/myTicket/${event}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );
      console.log(result.data.newTicket);
      if (result.status === 201) {
        console.log("success");
        navigator(`/ticket/${result.data.newTicket._id}`);// /${result.data.token}
        // getMyPendingTickets()
      }
    } catch (error) {
      console.log(error);
      if (error.response.data == "you can not add more ticket") {
        setMessage("Sorry, You can not add more than two tickets.");
      }
    }
  };

  useEffect(() => {
    addTicket();
    // eslint-disable-next-line 
  }, []);


  return (
    <div>
      {/* banner */}
      <div className="myEvent">
        <div className="cont">
          <p>
            <Link to="/"> Home </Link>
          </p>
          <span>events</span>
        </div>
        </div>
        {/* main */}
        <main>
          {message ? (
            <h1>{message} </h1>
          ) : (
            <img
              id="loading"
              src="https://i.pinimg.com/originals/1e/5c/0b/1e5c0bc454c49fb59a58a19f378d64e6.gif"
            />
          )}
       <Link to="/tickets"> See Your Tickets </Link>
        </main>{" "}

    </div>
  );
};

export default PostTicketSuccess;
