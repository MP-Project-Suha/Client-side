import React from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./style.css";

const Landing = ({ events }) => {
  const navigator = useNavigate();
  return (
    <div className="contain">
      {/* banner */}
      <div className="banner">
        <div className="contHome">
          <p className="bannerText">Now is Your Time, Create Yours!</p>
          <bottom
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              navigator(`/createEvent`);
            }}
          >
            Create Event
          </bottom>
          <div className="relative"></div>
        </div>
      </div>
      {/* main */}
      {events &&events.length?
      <main>
      
        <div className="relative">
          <span className="white">Popular</span>
          <h2 className="subTitle">
            Bringing the world together through live experiences
          </h2>
          <p className="nu"> [Catch a Ticket]</p>
        </div>
        <div className="big">
          <img id="a" src={events[0].image} />
          <div className="b">
            <div className="y">
              <h1 className="title">Riyadh's Company Event</h1>
              <hr className="line" />
              <p>
                {events[0].shortDisc}
                <br />- {events[0].location}
              </p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigator(`/Event/${events[0]._id}`);
                }}
                className="secondaryBtn"
              >
                See more
              </button>
            </div>
          </div>
        </div>
        
      </main>
      :<main><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" className="loading"/></main>
    }
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          // <div className="boxShadow" style={{ height: 100 }}>
          <div className="boxShadow">
            {isVisible ? (
              <CountUp
                start={0}
                end={75}
                className="counter"
                duration={5.0}
                separator=" "
                decimals={0}
                decimal=","
                prefix="<p class='counterText'>Events <span>Until</span> Now </p>"
                suffix=""
              />
            ) : (
              <div className="counter">
                {" "}
                <p className="counterText">
                  Events <span>Until</span> Now 0
                </p>{" "}
              </div>
            )}
          </div>
        )}
      </VisibilitySensor>
      <div className="yes">
        <div className="relative">
          <span className="white1">Coming</span>
          <h2 className="subTitle1">Events that will start after few days</h2>
          <p className="nu"> [Start Soon]</p>
        </div>
        <div className="flex">
          <div className="flexImg">
            {events && events.length? (
              events.map((elem, i) => (
                <div className="d">
                  <img
                    className="dd"
                    src={elem.image}
                    onClick={(e) => {
                      e.preventDefault();
                      navigator(`/Event/${elem._id}`);
                    }}
                  />
                </div>
              ))
            ) : (
              <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" className="loading"/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
