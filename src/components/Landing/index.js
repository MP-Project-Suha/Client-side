import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Landing = () => {
  return (
    <div className="contain">
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
      <main>
      < div id="yi">    </div>
      <h1>landing</h1>
      </main>
      </div>
  );
};

export default Landing;
