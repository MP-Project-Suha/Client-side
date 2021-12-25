import React, { useEffect, useState } from "react";
import MyTicket from "../MyTicket"
import "./style.css";
const MyTickets = ({myTickets,getMyTickets}) => {
  // useEffect(() => {
  //   getMyTickets();
  // }, []);
    return (
                  <div>
        {myTickets.length ? (
          myTickets.map((elem) => (
       
            <MyTicket key={`ticket${elem._id}`} ticket={elem} getMyTickets={getMyTickets} />
          ))
        ) : (
          <img src="https://i.pinimg.com/originals/1e/5c/0b/1e5c0bc454c49fb59a58a19f378d64e6.gif" />
        )}
      </div>

    )
}

export default MyTickets
