import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";
const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  return (
    <div className="header">
      {state.reducerLog.user ? (
        <div className="left">
          <img
            id="logo"
            src="https://firebasestorage.googleapis.com/v0/b/recipes-notebook-5d870.appspot.com/o/images%2FUntitled%20design(u2).png?alt=media&token=276c8b0c-f776-4640-a23d-0db75751cd28"
          />

          <ul className="nav">
            <li className={splitLocation[1] === "" ? "active" : ""}>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className={splitLocation[1] === "Public" ? "active" : ""}>
              {" "}
              <Link to="/Public">Public Events</Link>
            </li>
            <li className={splitLocation[1] === "Events" ? "active" : ""}>
              {" "}
              <Link to="/Events">My Events</Link>
            </li>
            <li className={splitLocation[1] === "tickets" ? "active" : ""}>
              {" "}
              <Link to="/Tickets">My Tickets</Link>
            </li>
            <li className={splitLocation[1] === "Profile" ? "active" : ""}>
              {" "}
              <Link to="/Profile">Profile</Link>
            </li>
            {state.reducerLog.user.role === "61c0da9610b76faf5ac7fdcc" ?<li className={splitLocation[1] === "controlPanel" ? "active" : ""}>
              {" "}
              <Link to="/controlPanel">Control Panel</Link>
            </li>:""}
          </ul>
        </div>
      ) : (
        <div className="left">
          <img
            id="logo"
            src="https://firebasestorage.googleapis.com/v0/b/recipes-notebook-5d870.appspot.com/o/images%2FUntitled%20design(u2).png?alt=media&token=276c8b0c-f776-4640-a23d-0db75751cd28"
          />

          <ul className="nav">
            <li className={splitLocation[1] === "" ? "active" : ""}>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className={splitLocation[1] === "Public" ? "active" : ""}>
              {" "}
              <Link to="/Public">Public Events</Link>
            </li>
        
          </ul>
        </div>
      )}
      <div className="right">
        <Link className="lightBtn" to="/createEvent">
          Create Event
        </Link>
      </div>
    </div>
  );
};

export default Header;
