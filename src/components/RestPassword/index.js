import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import { logIn } from "../../Reducers/login";
import { useDispatch, useSelector } from "react-redux";
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
      if (result.status === 201) {
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
    <div className="container">
      <div className="form">
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
        <button
          id="signupSubmitButton"
          className="submit"
          onClick={resetPassword}
        >
          Rset Password
        </button>
        <h1 className="user">{message ? message : ""}</h1>
      </div>
    </div>
  );
};

export default ResetPassword;
