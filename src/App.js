import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Verify from "./components/Verify ";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/RestPassword";
import CreateEvent from "./components/CreateEvent";
import Event from "./components/Event";
import MyEvents from "./components/MyEvents";
import PublicEvents from "./components/PublicEvents";
import PostTicket from "./components/PostTicket"
import MyTickets from "./components/MyTickets";
import GuestList from "./components/GuestList";
const App = () => {
  const [events, setEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);
  const [myTickets, setMyTickets] = useState([]);
  
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  useEffect(() => {
    allPublicEvents();
    getMyEvents();
  }, []);

  const allPublicEvents = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/events`
      );
      // console.log(result.data);
      setEvents(result.data);
    } catch (error) {
      console.log(error);
    }
  };



  const getMyEvents = async () => {

    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/myEvents`,
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );
      // console.log("m");
      // console.log(result.data);
      setMyEvents(result.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getMyTickets();
  }, []);

  const getMyTickets = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/myTickets`,
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );
      // console.log("getMyTickets,",result.data);
      setMyTickets(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      
      <Routes>
      <Route
          exact
          path="/Tickets" 
          element={<MyTickets getMyTickets={getMyTickets} myTickets={myTickets} />}
        />
      <Route
          exact
          path="/postTicket"
          element={<PostTicket />}
        />
        <Route
          exact
          path="/Events"
          element={<MyEvents getMyEvents={getMyEvents} myEvents={myEvents} />}
        />
        <Route
          exact
          path="/Public"
          element={
            <PublicEvents allPublicEvents={allPublicEvents} events={events} />
          }
        />
         <Route exact path="/GuestList/:_id" element={<GuestList />} />
        <Route exact path="/Event/:eventId" element={<Event />} />
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/verify/:token2" element={<Verify />} />
        <Route exact path="/forgetPassword" element={<ForgetPassword />} />
        <Route
          exact
          path="/resetPassword/:id/:tokenMail"
          element={<ResetPassword />}
        />
        <Route exact path="/createEvent" element={<CreateEvent />} />
      </Routes>
    </div>
  );
};

export default App;
