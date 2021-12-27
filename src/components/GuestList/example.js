import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";



const GuestList = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

  return (
    <div>
      {/* banner */}
      <div className="guestList">
        <div className="cont">
        <p>
            <Link to="/"> Home </Link> - {splitLocation[1]}
          </p>
          <span>Guest</span>
        </div>
      </div>
          {/* main */}
          <main className="event">

              </main>
    </div>
  );
};

export default GuestList;
