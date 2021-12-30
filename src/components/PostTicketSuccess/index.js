import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
//style
import "./style.css";
import { useNavigate, useParams } from "react-router";

const PostTicketSuccess = ({  getMyPendingTickets}) => {
const {event, donate , price}=useParams();
const [tickets, setTickets] = useState([])
useEffect(() => {
  addTicket()
  // postOrder()
}, [])
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });
  const addTicket = async () => {
    try {


        const result = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/myTicket/${event}`,{},
            {
              headers: {
                Authorization: `Bearer ${state.reducerLog.token}`,
              }
            }
          );
      console.log(result.data);
      if (result.status === 201) {
        console.log("success");
        // getMyPendingTickets()
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const postOrder = async () => {
  //   try {


  //       const result = await axios.post(
  //           `${process.env.REACT_APP_BASE_URL}/order/${event}`,{tickets:tickets, total:(Number(price) + Number(donate))},
  //           {
  //             headers: {
  //               Authorization: `Bearer ${state.reducerLog.token}`,
  //             }
  //           }
  //         );
  //     console.log(result);
  //     if (result.status === 201) {
  //       console.log("success");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <button
      className="btn"
        onClick={(e) => {
          e.preventDefault();
          addTicket();
        }}
      >
        Get Ticket
      </button>
    </div>
  );
};

export default PostTicketSuccess;
