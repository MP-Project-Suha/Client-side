import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing"
import Login from "./components/Login";
import Register from "./components/Register";
import Verify from "./components/Verify ";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/RestPassword";
import CreateEvent from "./components/CreateEvent"
import Event from "./components/Event"
import Events from "./components/Events"
const App = () => {
  const [events, setEvents] = useState([]);
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });
  console.log(state.reducerLog);
  useEffect(() => {
    allPublicEvents();
  }, []);

  const allPublicEvents = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/events`,
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );
console.log(result);
      setEvents(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header />

      <Routes>
      <Route exact path="/Events" element={<Events allPublicEvents ={allPublicEvents } events={events} /> }/>
      <Route exact path="/Event" element={<Event />} />
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/verify/:token2" element={<Verify />} />
      <Route exact path="/forgetPassword" element={<ForgetPassword/>} />
      <Route exact path="/resetPassword/:id/:tokenMail" element={<ResetPassword/>} />
      <Route exact path="/createEvent" element={<CreateEvent/>} />
     
      </Routes>
    </div>
  );
};

export default App;
