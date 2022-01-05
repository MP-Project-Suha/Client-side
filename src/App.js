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
import PostTicket from "./components/PostTicket";
import MyTickets from "./components/MyTickets";
import GuestList from "./components/GuestList";
import QR from "./components/QR";
import Ticket from "./components/Ticket";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import Cart from "./components/Cart";
import PostTicketSuccess from "./components/PostTicketSuccess";
import TicketReader from "./components/TicketReader";
import EditEvent from "./components/EditEvent"
import QRReader from "./components/QRReader"
const App = () => {
  const [events, setEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);
  const [myTickets, setMyTickets] = useState([]);
  const [myPendingTickets, setMyPendingTickets] = useState([]);
  const [count, setCount] = useState(null);
  const [order, setOrder] = useState([]);

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

  useEffect(() => {
    getMyPendingTickets();
  }, []);

  const getMyPendingTickets = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/myPendingTickets`,
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );
      if (result.data) {
        if (result.data.length) {
          const counts = {};

          result.data.forEach((ticket) => {
            counts[ticket.event._id] = (counts[ticket.event._id] || 0) + 1;
          });
          setCount(counts);
          //  console.log("counts", counts);
          for (const elem in counts) {
            const obj = { ticket: elem, quantity: counts[elem] };
            order.push(obj);
            setOrder(order);
          }
        }
        setMyPendingTickets(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("order", order);
  return (
    <div>
      <Header />
      
      <Routes>
      <Route exact 
      path="/QrReader"
      element={<QRReader/>}
      />
      <Route exact 
      path="/editEvent/:event"
      element={<EditEvent/>}
      />
      <Route
          exact
          path="/TicketReader/:ticket"
          element={<TicketReader/>}
        />
        <Route
          exact
          path="/PostTicketSuccess/:event"
          element={<PostTicketSuccess  getMyPendingTickets={ getMyPendingTickets}/>}
        />
        <Route
          exact
          path="/cart"
          element={<Cart getMyPendingTickets={getMyPendingTickets}  myPendingTickets={myPendingTickets}  order={ order} />}
        />
        <Route exact path="/payment/:event" element={<Payment />} />
        <Route exact path="/qr" element={<QR />} />
        <Route
          exact
          path="/tickets"
          element={
            <MyTickets getMyTickets={getMyTickets} myTickets={myTickets} />
          }
        />
        <Route exact path="/ticket/:_id" element={<Ticket />} />
        <Route exact path="/postTicket/:event" element={<PostTicket />} />
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
        <Route exact path="/" element={<Landing allPublicEvents={allPublicEvents} events={events} />} />
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
      <Footer />
    </div>
  );
};

export default App;
