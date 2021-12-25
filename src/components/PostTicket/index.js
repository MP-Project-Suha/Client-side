import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
//style
import "./style.css";

const PostTicket = ({ eventId }) => {

  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });
  const addTicket = async () => {
    try {


        const result = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/myTicket/${eventId}`,{},
            {
              headers: {
                Authorization: `Bearer ${state.reducerLog.token}`,
              }
            }
          );
      console.log(result);
      if (result.status === 201) {
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          addTicket();
        }}
      >
        Get Ticket
      </button>
    </div>
  );
};

export default PostTicket;
