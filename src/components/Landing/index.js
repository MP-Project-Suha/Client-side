import React from "react";
import { Link } from "react-router-dom";
import PublicEvent from "../PublicEvent";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import "./style.css";

const Landing = ({ events, allPublicEvents }) => {
  return (
    <div className="contain">
      {/* banner */}
      <div className="banner">
        <div className="contHome"></div>
      </div>
      {/* main */}
      <main>
        <div className="relative">
          <span className="white">Popular</span>
          <h2 className="subTitle">
            Bringing the world together through live experiences
          </h2>
          <p className="nu"> [Catch a Ticket]</p>
        </div>
        <div className="big">
          <img
            id="a"
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
          <div className="b">
            <div className="y">
              <h1 className="title">Riyadh's Company Event</h1>
              <hr className="line" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the when an unknown printer took.
                <br />- Saudi Arabia, Riyadh, Kingdom Tour.
              </p>

              <button className="secondaryBtn">See more</button>
            </div>
          </div>
        </div>
        {/* {events && events.length ? (
          events.map((elem, i) => (
            <PublicEvent event={elem} allPublicEvents={allPublicEvents} />
          ))
        ) : (
          <img
            id="loading"
            src="https://i.pinimg.com/originals/1e/5c/0b/1e5c0bc454c49fb59a58a19f378d64e6.gif"
          />
        )} */}
      </main>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          // <div className="boxShadow" style={{ height: 100 }}>
          <div className="boxShadow">
            {isVisible ? <CountUp
             start={0}
             end={75}
            className="counter"
             duration={5.00}
             separator=" "
             decimals={0}
             decimal=","
             prefix="<p class='counterText'>Events <span>Until</span> Now </p>"
             suffix=""
           />
            : 75 }
          </div>
        )}
      </VisibilitySensor>
      <div className="yes">
      <div className="relative">
          <span className="white1">Coming</span>
          <h2 className="subTitle1">
          Events that will start after few days
          </h2>
          <p className="nu"> [Start Soon]</p>
        </div>
        <div className="flex">
        <div className="flexImg">
          <div  className="d">
          <img
            className="dd"
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          /></div>
          <div  className="d"><img
          className="dd"
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          /></div>  
              <div  className="d"> <img
           className="dd"
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          /></div>  
         </div>
        </div>
      </div>

    </div>
  );
};

export default Landing;
