import React, { useEffect, useState } from "react";
import QrReader from 'react-qr-reader'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//style
import "./style.css";
import { useNavigate, useParams } from "react-router";
const delay = 500;
const previewStyle = {
    height: 240,
    width: 320,
  };
const QRReader = () => {


      const [result, setResult] = useState('No result');
      const handleScan = (result) => {
        if (result) {
          setResult(result);
        }
      };
      const handleError = (error) => {
        console.log(error);
      };

//   const { ticket } = useParams();
//   const [message, setMessage] = useState("");
//   const state = useSelector((state) => {
//     return {
//       reducerLog: state.reducerLog,
//     };
//   });
//   useEffect(() => {
//     getTicket();
//   }, []);

//   const getTicket = async () => {
//     try {
//       const result = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/readTicket/${ticket}`,
//         {
//           headers: {
//             Authorization: `Bearer ${state.reducerLog.token}`,
//           },
//         }
//       );

//       console.log("result", result);
//       if (result.status === 200) {
//         setMessage(result.data);
//         console.log("success");
//       }
//     } catch (error) {
//       console.log("error getTicket", error);
//       setMessage(error.response.data);
//     }
//   };

  return (
    <div>
      <div className="myEvent"></div>

      <main className="event card contentEvent">
          {/* {message ? message : ""} */}
      
          <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      <p>{result}</p>
      </main>
    </div>
  );
};

export default QRReader;
