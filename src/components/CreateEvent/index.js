import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { storage } from "../firebase";
import DatePicker from "react-datepicker";

//
import DateAndTime from "../DateAndTime";
// style
import "./style.css";
import "react-datepicker/dist/react-datepicker.css";

const CreateEvent = ({ getRecipes }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

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

  const createEvent = async () => {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/myEvent`, {
      title,
      shortDisc,
      longDisc,
      images,
      location,
      price,
      beginAt,
      endAt,
      isPublic,
    });

    if (res.data.status === 201) {
      getRecipes();
      setMessage("success");
      navigate("/myEvent");
    } else {
      setMessage("sorry, something wrong happened");
    }
  };

  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // const handleUpload = () => {
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(progress);
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           setUrl(url);
  //         });
  //     }
  //   );
  // };

  return (
    <div>
      <div>
        <form
          method="POST"
          onSubmit={() => {
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
            type="text"
            name="price"
            rows="1"
            placeholder="Ticket Price"
            required
            onChange={(e) => setPrice(e.target.value)}
          />

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

          {/* <div>
              <input type="file" onChange={handleChange} />
              {image?
                        <div >
                        <button  onClick={handleUpload}>
                          Upload
                        </button>
                        <progress value={progress} max="100" />
                      </div>
                      :""
              }
  
            </div> */}

          {message ? <p> {message}</p> : ""}

          <div>
            <p>
              <Link to="/Recipes"> Cancel </Link>
            </p>
            <input type="submit" value="Save" />{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
