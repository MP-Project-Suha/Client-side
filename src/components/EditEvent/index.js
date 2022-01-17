import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DatePicker from "react-datepicker";
//childe components
// import UploadImage from "../UploadImage/index.js";
import DateAndTime from "../DateAndTime";
// style file
import "./style.css";
import "react-datepicker/dist/react-datepicker.css";

const EditEvent = ({ getRecipes }) => {
  const { event } = useParams();

  const [eventData, setEventData] = useState(null);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");

  // create event values
  const [title, setTitle] = useState("");
  const [shortDisc, setShortDisc] = useState("");
  const [longDisc, setLongDisc] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  //Date And Time values
  const [beginAt, setBeginAt] = useState(new Date());
  const [endAt, setEndAt] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [isPublic, setIsPublic] = useState(false);
 

  // navigation
  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    setUser(JSON.parse(userStorage));
  }, []);

  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  useEffect(() => {
    if (!state.reducerLog.user) navigate("/login");
    getEvent();
  }, []);

  //get event from API
  const getEvent = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/event/${event}`
      );
      console.log(result.data);
      if (result.data) {
        setEventData(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //edit event from API
  const editEvent = async () => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/myEvent/${event}`,
        {
          title,
          shortDisc,
          longDisc,
          image: url,
          location,
          price,
          beginAt,
          endAt,
          startTime,
          endTime,
          isPublic,
        },
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );
      console.log(res);
      if (res.status === 201) {
        setMessage("success");
        navigate(`/Event/${res.data._id}`);
      } else {
        setMessage("sorry, something wrong happened");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  // set range of dates value
  const onChange = (dates) => {
    const [start, end] = dates;
    setBeginAt(start);
    setEndAt(end);
    console.log(end);
  };

  return (
    eventData && (
      <div className="all">
        {/* banner */}
        <div className="myEvent">
          <div className="cont">
            <p>
              <Link to="/"> Home </Link> -
            </p>
            <span>{eventData.title}</span>
          </div>
        </div>
        {/* main */}
        <div className="app-container">
          <form
            className="creat"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              editEvent();
            }}
          >
            <h1> Edit Your Event </h1>

            <input
              defaultValue={eventData.title}
              className="input"
              type="text"
              name="title"
              rows="1"
              placeholder="Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              defaultValue={eventData.shortDisc}
              type="text"
              name="Short Description.."
              rows="5"
              placeholder="shortDisc"
              required
              onChange={(e) => setShortDisc(e.target.value)}
            />
            <br />
            <textarea
              defaultValue={eventData.longDisc}
              type="text"
              name="longDisc"
              rows="5"
              placeholder="Long Description "
              required
              onChange={(e) => setLongDisc(e.target.value)}
            />
            <br />
            <input
              defaultValue={eventData.location}
              className="input"
              type="text"
              name="location"
              rows="1"
              placeholder="Location"
              required
              onChange={(e) => setLocation(e.target.value)}
            />
            <br />
            <input
              defaultValue={eventData.price}
              className="input"
              type="number"
              name="price"
              rows="1"
              placeholder="Ticket Price in Riyal"
              required
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <div>
              <input
                onChange={(e) => setIsPublic(false)}
                type="radio"
                value="false"
                name="isPublic"
              />{" "}
              Private
              <input
                onChange={(e) => setIsPublic(true)}
                type="radio"
                value="true"
                name="isPublic"
              />{" "}
              Public
            </div>
            <br />
            <div>
              <label to="dates">Select Start and End Date</label>
              <DatePicker
                selected={beginAt}
                onChange={onChange}
                startDate={beginAt}
                endDate={endAt}
                minDate={new Date()}
                selectsRange
                isClearable={true}
                withPortal
                disabledKeyboardNavigation
                placeholderText="Select Date"
                // inline
                // showDisabledMonthNavigation
                id="dates"
              />

              <label to="startTime">Start Time</label>
              <DatePicker
                selected={startTime}
                onChange={(date) => {
                  setStartTime(date);
                  console.log(date);
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={20}
                timeCaption="Time"
                dateFormat="h:mm aa"
                id="startTime"
              />
              <label to="endTime">End Time</label>
              <DatePicker
                selected={endTime}
                onChange={(date) => {
                  setEndTime(date);
                  console.log(date);
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={20}
                timeCaption="Time"
                dateFormat="h:mm aa"
                id="endTime"
              />
            </div>
            {/* <Location/> */}
            {/* <UploadImage setUrl={setUrl} /> */}
            {message ? <p> {message}</p> : ""}
            <div className="btnsContainer">
              <Link className="btn" to="/">
                {" "}
                Cancel{" "}
              </Link>
              <input className="btn" type="submit" value=" Save " />{" "}
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EditEvent;
