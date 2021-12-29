import React, { useState } from "react";
import axios from "axios";
import PasswordChecklist from "react-password-checklist";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
const Register = () => {

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("61c0da7f10b76faf5ac7fdca"); //user role
  // admin role:"61c0da9610b76faf5ac7fdcc"
  const [message, setMessage] = useState("");

  const register = async () => {
    setMessage("");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/register`,
        {
          email,
          firstName,
          lastName,
          password,
          role,
        }
      );
      console.log(result.status);
      if (result.status === 201) {
        setMessage(result.data.message + ", Check your email please!");
      }
    } catch (error) {
      setMessage("Registration Failed");
      console.log(error.response);
    }
  };

  return (
    <div className="myEvent">
            {/* banner */}
            <div className="myEvent">
        <div className="cont">
          <p>
            <Link to="/">  Home </Link> - {splitLocation[1]}
          </p>
          <span>{splitLocation[1]}</span>
        </div>
      </div>
{/* main */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
      >
        <input
          required
          type="text"
          placeholder="First Name .."
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Last Name .."
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          required
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordChecklist
          rules={[`minLength`, `specialChar`, `number`, `capital`, `lowercase`]}
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

        <p> {message ? message : ""}</p>
        <button className="btn" id="signupSubmitButton">Register</button>
      </form>
    </div>
  );
};

export default Register;
