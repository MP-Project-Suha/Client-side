import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import Payment from "../Payment";
//style
import "./style.css";

const PostTicket = () => {
  const navigator = useNavigate();
  const { event } = useParams();
  const [price, setPrice] = useState("");
  const [donate, setDonate] = useState("");
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  // if user dose not have an account navigate to login page
  useEffect(() => {
    if (!state.reducerLog.token) {
      navigator("/login");
    }
  }, []);
  useEffect(() => {
    getEvent();
    // eslint-disable-next-line
  }, []);

  const getEvent = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/event/${event}`
      );

      if (result.data) {
        console.log(result.data);
        setPrice(result.data.price);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="myEvent">
      {/* banner */}
      <div className="myEvent">
        <div className="cont"></div>
      </div>
      {/* main */}
      <main className="event card">
        <h2>Checkout Page</h2>
        <p> You ticket price is {price && price ? price : "free"}</p>
        <div className="donate">
          <p>If you want to donate</p>

          <input
            className="input donate"
            placeholder="RS"
            type="number"
            onClick={(e) => setDonate(e.target.value)}
          />
        </div>
        <h1>payment</h1>
        <Payment donate={donate} price={price} />
      </main>
    </div>
  );
};

export default PostTicket;
