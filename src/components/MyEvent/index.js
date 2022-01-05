import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
// style
import "./style.css";

const MyEvent = ({ event ,getMyEvents}) => {
  const navigator = useNavigate();
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });
  const deleteEvent = async () => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/myEvent/${event._id}`
        ,{
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
        );

        if(result.status==201){
          getMyEvents()
        }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card flexCard">
  
      <Link to={`/Event/${event._id}`}>
        <p>{event.title}</p>
      </Link>

      {event.isVerified ? (
        <>
        <label
          onClick={(e) => {
            e.preventDefault();
            navigator(`/GuestList/${event._id}`);
          }}
          className="status cursor"
        >
          Guest List
        </label>
        <label
          onClick={(e) => {
            e.preventDefault();
            navigator(`/QrReader`);
          }}
          className="status cursor"
        >
        QR Reader
        </label>
        </>
      ) : (
        <label className="status space">pending</label>
      )}
            <label
          onClick={(e) => {
            e.preventDefault();
            navigator(`/editEvent/${event._id}`);
          }}
          className="status cursor"
        >
          Edit Event
        </label>
        <label
          onClick={(e) => {
    deleteEvent()
          }}
          className="status cursor"
        >
         Delete Event
        </label>

    </div>

  );
};

export default MyEvent;
