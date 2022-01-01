import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//style
import "./style.css";
import { useNavigate, useParams } from "react-router";

const TicketReader = () => {
  const { ticket } = useParams();
  //   console.log(ticket);
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  //  console.log(state.reducerLog.token);

  const getTicket = async () => {
    try {
        console.log("getTicket");
      const result = await axios.get(
        `http://localhost:5000/readTicket/61cd6eafcc967ba2853fe3dc`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWM0MzI1ZGRlMjRmMWQ0ZTU0M2VjZjciLCJyb2xlIjoiNjFjMGRhN2YxMGI3NmZhZjVhYzdmZGNhIiwiaWF0IjoxNjQwNzc2MTYyLCJleHAiOjE2NDEzODA5NjJ9.1nIs80ZLenpLDzMfUHf1FcC5assgzg6cgB21gx64lFA`,
          },
        }
      );
      console.log("getTicket");
      console.log(result);
      if (result.status === 200) {
        console.log("success");
      }
    } catch (error) {
      console.log("error getTicket", error.data);
    }
  };

  useEffect(() => {
    getTicket();
  }, []);

  return <div></div>;
};

export default TicketReader;
