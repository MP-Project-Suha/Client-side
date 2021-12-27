import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Landing = () => {
  return (
    <div className="myEvent">
      {/* banner */}
      <div className="myEvent">
        <div className="cont">
          <p>
            <Link to="/"> Home </Link>
          </p>
          <span>Home</span>
        </div>
      </div>
      {/* main */}
      <h1>landing</h1>
    </div>
  );
};

export default Landing;
