import React, { useState } from "react";
//package
import axios from "axios";
import GoogleLogin from "react-google-login";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link, useLocation } from "react-router-dom";

import { logIn } from "../../Reducers/login";
import ForgetPassword from "../ForgetPassword";

import "./style.css";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  //input variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //to interact with user
  const [message, setMessage] = useState("");

  //for toggle login to reset password process
  const [toggle, setToggle] = useState(true);

  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  //login api function
  const login = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          email,
          password,
        }
      );

      // case login successed navigate to home page
      if (result.status === 201) {
        setMessage("Success");
        dispatch(logIn({ user: result.data.result, token: result.data.token }));
        navigator("/");
      }
    } catch (error) {
      console.log(error.response);

      if (error.response.status === 403) {
        //case email is not verified
        setMessage("Please, Verified your email");
      } else {
        //case user enter wrong email or password
        setMessage("Please, Enter invalid email or password");
      }
    }
  };

  const forgotPasswordNav = async () => {
    navigator("/forgetPassword");
  };

  const responseSuccessGoogle = (response) => {
    console.log("google", response);
    console.log("google", response.tokenId);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/googleLoggin`, {
        tokenId: response.tokenId,
      })
      .then((result) => {
        console.log("responseSuccessGoogle", result);
        console.log("user", result.data.result);

        console.log("token", result.data.token);
        dispatch(logIn({ user: result.data.result, token: result.data.token }));
        navigator("/explore");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="myEvent">
      {/* banner */}
      <div className="myEvent">
        <div className="cont">
          <p>
            <Link to="/"> Home </Link> - {splitLocation[1]}
          </p>
          <span>{splitLocation[1]}</span>
        </div>
      </div>

      {/* main */}
      {toggle ? (
        <div className="box flex">
          <p className="boxTitle">Login Right Now!</p>
          <hr className="line" />
          <input
            className="input"
            placeholder="Email..."
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{message ? message : ""}</p>
          <button className="btn" onClick={login}>
            Submit
          </button>
          <p className="link" onClick={() => setToggle(false)}>
            Forget your password?
          </p>
          <p className="link" onClick={(e) =>{e.preventDefault()
          navigator("/Register")} }>
            Don't have account? Sign Up!
          </p>
          <GoogleLogin
            className="input"
            clientId="
            61276267155-5b31fjejqkcbo2h59bj9ci8lnitjjhmk.apps.googleusercontent.com"
            buttonText="Login With Gmail"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        <ForgetPassword setToggle={setToggle} />
      )}
    </div>
  );
};

export default Login;
