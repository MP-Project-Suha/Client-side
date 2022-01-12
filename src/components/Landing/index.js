import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import PublicEvent from "../PublicEvent";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import "./style.css";

const Landing = ({ events, allPublicEvents }) => {
  const navigator = useNavigate()
  return (
    <div className="contain">
      {/* banner */}
      <div className="banner">
        <div className="contHome">
        <p className="bannerText">Now is Your Time, Create Yours!</p>
        <bottom  className="btn" onClick={(e)=>{
                e.preventDefault()
                navigator(`/createEvent`)
              }}
            
            > Create Event</bottom>
        <div className="relative">
        
      
        </div>
        </div>
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
            src={events&& events[0].image}
          />
          <div className="b">
            <div className="y">
              <h1 className="title">Riyadh's Company Event</h1>
              <hr className="line" />
              <p>
               {events&& events[0].shortDisc}
                <br />- { events&& events[0].location}
              </p>

              <button onClick={(e)=>{
                e.preventDefault()
                navigator(`/Event/${ events&& events[0]._id}`)
              }} className="secondaryBtn">See more</button>
            </div>
          </div>
        </div>

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
            :<div className="counter"> <p className='counterText'>Events <span>Until</span> Now  0</p> </div> }
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


        {events && events.length!==0 ? (
          events.map((elem, i) => (
              <div  className="d">
          <img
            className="dd"
            src={elem.image}
            onClick={(e)=>{
              e.preventDefault()
              navigator(`/Event/${ elem._id}`)
            }}
          /></div>
          ))
        ) : (
          <img
            id="loading"
            src="https://i.pinimg.com/originals/1e/5c/0b/1e5c0bc454c49fb59a58a19f378d64e6.gif"
          />
        )}

          {/* <div  className="d">
          <img
            className="dd"
            src={events&& events[0].image}
          /></div>
          <div  className="d"><img
          className="dd"
          src={events&& events[1].image}
          /></div>  
              <div  className="d"> <img
           className="dd"
           src={events&& events[2].image}
          /></div>  
          */}
        </div>
        </div>
      </div>

    </div>
  );
};

export default Landing;
