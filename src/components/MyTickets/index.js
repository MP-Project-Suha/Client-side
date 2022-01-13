import React, { useEffect, useState } from "react";
import MyTicket from "../MyTicket"
import { Link, useLocation } from "react-router-dom";
import "./style.css";
const MyTickets = ({myTickets,getMyTickets}) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
 
  useEffect(() => {
    getMyTickets();
  }, []);
    return (
      <div className="contain">
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
                  <main>

        {myTickets.length ? (
          myTickets.map((elem) => (
       
            <MyTicket key={`ticket${elem._id}`} ticket={elem} getMyTickets={getMyTickets} />
          ))
        ) : (
          <h3>No Ticket for you.. </h3>
        )}
      </main>
      </div>
    )
}

export default MyTickets
