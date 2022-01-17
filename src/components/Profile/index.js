import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { update, logOut } from "../../Reducers/login";
import UploadImage from "../UploadImage";
import axios from "axios";

import "./style.css";
const Profile = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isDele, setIsDele] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [url, setUrl] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  useEffect(() => {
    if (!state.reducerLog.user) navigator("/login");
  }, []);

  const updateProfile = async () => {
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/profile`,
        {
          firstName,
          lastName,
          avatar: url,
          isDele,
        },
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );

      console.log(result.data);
      if (typeof result.data === "object") {
        dispatch(update({ user: result.data, token: state.reducerLog.token }));
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="all">
      {/* banner */}
      <div className="guestList">
        <div className="cont">
          <p>
            <Link to="/"> Home </Link> - {splitLocation[1]}
          </p>
          <span>{splitLocation[1]}</span>
        </div>
      </div>
      {/* main */}
      <main>
        {state.reducerLog.user ? (
          <div className="card">
            {updated ? (
              <div className="form">
                <h1>Update Your Profile</h1>
                <hr className="line" />
                <input
                  defaultValue={state.reducerLog.user.firstName}
                  className="input"
                  type="text"
                  name="firstName"
                  rows="1"
                  placeholder="First Name.."
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  defaultValue={state.reducerLog.user.lastName}
                  className="input"
                  type="text"
                  name="lastName"
                  rows="1"
                  placeholder="Last Name.. "
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
         
                <h4>Delete Your Account?</h4>
                <div>
                  <label to="dele">Yes</label>
                  <input
                    id="dele"
                    onChange={(e) => setIsDele(true)}
                    type="radio"
                    value="true"
                    name="isDele"
                  />
                  <label to="dele"> No</label>
                  <input
                    id="dele"
                    onChange={(e) => setIsDele(false)}
                    type="radio"
                    value="true"
                    name="isDele"
                  />
                </div>
                <UploadImage setUrl={setUrl} />
                <br />
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    updateProfile();
                    setUpdated(false);
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="form">
                {state.reducerLog.user.avatar ? (
                  <img
                    className="profileImg"
                    src={state.reducerLog.user.avatar}
                  />
                ) : (
                  ""
                )}
                <h1>
                  Hi, {state.reducerLog.user.firstName}{" "}
                  {state.reducerLog.user.lastName}
                </h1>
                <hr className="line" />
                <button className="btn" onClick={() => setUpdated(true)}>
                  Update Your Information
                </button>
                <button
                  className="secondaryBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(logOut({ token: "" }));
                    navigator("/login");
                  }}
                >
                  LOG OUT
                </button>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default Profile;
