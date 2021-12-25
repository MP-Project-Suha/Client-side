

import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
  <ul>
  
          <li> <Link to="/">Home</Link></li> 
          <li>  <Link to="/login">Login</Link></li> 
          <li>  <Link to="/register">Register</Link></li> 
          <li>  <Link to="/createEvent">Create Event</Link></li> 
          <li>  <Link to="/PublicEvents">PublicEvents</Link></li> 
          <li> <Link to="/MyEvents">MyEvents</Link></li> 


            </ul>
        </div>
    )
}

export default Header
