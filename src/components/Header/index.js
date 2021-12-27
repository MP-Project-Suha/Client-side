

import React from 'react'
import { Link ,useLocation} from "react-router-dom";

import "./style.css"
const Header = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <div className="header">
            <div className="left">
                <h1 className="logo">Suha</h1>
          
  <ul className="nav">
  
          <li  className={splitLocation[1] === "" ? "active" : ""} > <Link to="/">Home</Link></li> 
          <li className={splitLocation[1] === "login" ? "active" : ""}>  <Link to="/login">Login</Link></li> 
          <li className={splitLocation[1] === "register" ? "active" : ""}>  <Link to="/register">Register</Link></li> 
 
          <li className={splitLocation[1] === "Public" ? "active" : ""}>  <Link to="/Public">Public Events</Link></li> 
          <li className={splitLocation[1] === "Events" ? "active" : ""}> <Link to="/Events">My Events</Link></li> 
          <li className={splitLocation[1] === "Tickets" ? "active" : ""}> <Link to="/Tickets">My Tickets</Link></li> 

            </ul>
            </div>
            <div className="right">
         <Link className="lightBtn" to="/createEvent">Create Event</Link>
            </div>
        </div>
    )
}

export default Header
