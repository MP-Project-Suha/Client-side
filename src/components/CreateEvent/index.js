import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DatePicker from "react-datepicker";
import Location from "../Location";
import UploadImage from "../UploadImage"
//
import DateAndTime from "../DateAndTime";
// style
import "./style.css";
import "react-datepicker/dist/react-datepicker.css";

const CreateEvent = ({ getRecipes }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  
  // create event values
  const [title, setTitle] = useState("");
  const [shortDisc, setShortDisc] = useState("");
  const [longDisc, setLongDisc] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  //Date And Time
  const [beginAt, setBeginAt] = useState(new Date());
  const [endAt, setEndAt] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const [isPublic, setIsPublic] = useState(false);
  const [images, setImages] = useState([]);
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

  const createEvent = async () => {
    try {


    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/myEvent`, {
      title,
      shortDisc,
      longDisc,
      images,
      location,
      price,
      beginAt,
      endAt,
      startTime,
      endTime,
      isPublic,
    }
    ,
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
    );
 console.log(res);
    if (res.status === 201) {
      setMessage("success");
      // navigate("/myEvents");
    } else {
      setMessage("sorry, something wrong happened");
    }
  } catch (error) {
      console.log(error.response);
  }
  };


  return (
    <div>
      <div>
        <form
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            createEvent();
          }}
        >
          <h1> Create Event </h1>
          <div></div>

          <input
            type="text"
            name="title"
            rows="1"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            type="text"
            name="Short Description.."
            rows="5"
            placeholder="shortDisc"
            required
            onChange={(e) => setShortDisc(e.target.value)}
          />

          <br />

          <textarea
            type="text"
            name="longDisc"
            rows="5"
            placeholder="Long Description "
            required
            onChange={(e) => setLongDisc(e.target.value)}
          />

          <br />

          <input
            type="text"
            name="location"
            rows="1"
            placeholder="Location"
            required
            onChange={(e) => setLocation(e.target.value)}
          />

          <br />

          <input
            type="number"
            name="price"
            rows="1"
            placeholder="Ticket Price in Riyal"
            required
            onChange={(e) => setPrice(e.target.value)}
          />

<br />

<input onChange={(e) => setIsPublic(false) } type="radio" value="false" name="isPublic" /> Private
        <input onChange={(e) => setIsPublic(true) } type="radio" value="true" name="isPublic" /> Public

          <br />

          <DateAndTime
            setBeginAt={setBeginAt}
            setEndAt={setEndAt}
            beginAt={beginAt}
            endAt={endAt}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />

          {/* <Location/> */}

<UploadImage setUrl={setUrl}/>

          {message ? <p> {message}</p> : ""}

          <div>
            <p>
              <Link to="/"> Cancel </Link>
            </p>
            <input type="submit" value="Save" />{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
