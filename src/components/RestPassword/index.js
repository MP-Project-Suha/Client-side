import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { logIn } from "../../Reducers/login";
import PasswordChecklist from "react-password-checklist";

const ResetPassword = () => {
  const [password, setPassword] = useState("initialState");
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const { tokenMail } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });
  console.log(state.reducerLog);
  const resetPassword = async () => {
    try {
      console.log(id, tokenMail);
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/resetPassword/${id}/${tokenMail}`,
        { password },
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );
      console.log(result);
      if (result.status === 200) {
        setMessage("password change successfully");
        dispatch(logIn({ user: result.data.result, token: result.data.token }));
        navigator("/explore");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.status == 403) {
        setMessage("something wrong");
      }
    }
  };
  return (
    <div className="myEvent">
      {/* banner */}
      <div className="myEvent">
        <div className="cont">
          <p>
            <Link to="/"> Home </Link> - Reset Password
          </p>
          <span>Welcome</span>
        </div>
      </div>
      {/* main */}
      <div className="box flex">
        <h1 className="heading">Enter new your password</h1>
        <input
          className="input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordChecklist
          rules={[`minLength`, `specialChar`, `number`, `capital`, `lowercase`]}
          className="dark"
          minLength={8}
          value={password}
          onChange={(isValid) => {
            if (isValid) {
              const button = document.querySelector(`#signupSubmitButton`);
              button.disabled = false;
            } else {
              const button = document.querySelector(`#signupSubmitButton`);
              button.disabled = true;
            }
          }}
        />
        <button id="signupSubmitButton" className="btn" onClick={resetPassword}>
          Reset Password
        </button>
        <h1 className="user">{message ? message : ""}</h1>
      </div>
    </div>
  );
};

export default ResetPassword;
