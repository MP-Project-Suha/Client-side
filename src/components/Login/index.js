import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../Reducers/login";
import { useNavigate } from "react-router";
import GoogleLogin from "react-google-login";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Login = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const navigator = useNavigate();
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  const login = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          email,
          password,
        }
      );
      console.log(result);
      if (result.status === 201) {
        setMessage("Success");
        dispatch(logIn({ user: result.data.result, token: result.data.token }));
        navigator("/");
      }
    } catch (error) {
      console.log(error.response);

      if (error.response.status === 403) {
        setMessage("Please, Verified your email");
      } else {
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
    <main className="event card">
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
      <br />
      <p>{message ? message : ""}</p>
      <button className="btn" onClick={login}>
        Submit
      </button>

      <br />

      <GoogleLogin
        clientId="61276267155-5b31fjejqkcbo2h59bj9ci8lnitjjhmk.apps.googleusercontent.com"
        buttonText="Login With Gmail"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />

      <br />
      <p
        onClick={(e) => {
          e.preventDefault();
          forgotPasswordNav();
        }}
      >
        Forget your password?
      </p>
      </main>
    </div>
  );
};

export default Login;
