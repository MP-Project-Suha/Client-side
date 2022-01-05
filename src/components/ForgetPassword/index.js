import React, { useState } from "react";
//package
import axios from "axios";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//style
import "./style.css";

const ForgetPassword = ({ setToggle }) => {
  const [email, setEmail] = useState("initialState");
  const [message, setMessage] = useState("");
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  const forgotPasswordFunc = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/forgotPassword`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );
      console.log(result.status);
      if (result.status === 200) {
        setMessage(
          "We Send email with link to reset your password, Check your Spam or bulk mail folders."
        );
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.status == 403 || error.response.status == 404) {
        setMessage("Your email is not registered yet.");
      } else {
        setMessage("Some thing wrong happened ..");
      }
    }
  };
  return (
    <div className="box flex">
      <p className="boxTitle">Enter your current email ! </p>
      <hr className="line" />
      <input
        className="input"
        placeholder="Enter email..."
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <p>{message ? message : ""}</p>
    
        {message.includes("Your email is not registered yet.") ? (
          <Link to="/">Sign Up</Link>
        ) : (
          ""
        )}
      </div>
      <button className="btn" onClick={forgotPasswordFunc}>
        Send To my Email
      </button>
      <p className="link" onClick={() => setToggle(true)}>
        Back to login form
      </p>
    </div>
  );
};

export default ForgetPassword;
