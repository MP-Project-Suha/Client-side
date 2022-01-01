import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import axios from "axios";
import "./style.css";
import { Link ,useLocation} from "react-router-dom";
import QR from '../QR'
import TicketReader from "../TicketReader";
const Ticket = () => {
    const location = useLocation();
    const [url, setUrl] = useState("")
    const [token, setToken] = useState("")
    // const { pathname } = location;
 
    const {_id} = useParams() //ticket id
    const [ticket, setTicket] = useState(null);
    const state = useSelector((state) => {
        return {
          reducerLog: state.reducerLog,
        };
      });
    
    useEffect(() => {
        getTicket() 

      }, []);

      const getTicket = async () => {
        try {
          const result = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/myTicket/${_id}`
            // ,{
            //     headers: {
            //       Authorization: `Bearer ${state.reducerLog.token}`,
            //     },
            //   }
          );

          if (result.data) {
            console.log(result.data.result);
            setTicket(result.data.result);
      //  console.log(process.env.REACT_APP_FRONT_URL+`TicketReader`+`/`+ result.data.result._id );
            setUrl(`http://localhost:3000/`+`TicketReader`+`/`+ result.data.result._id )
          }
        } catch (error) {
          console.log(error.response);
        }
      };
    return (
        <div >
            <div className="myEvent"></div>
            <main>
{ticket && ticket.event.title}
              <QRCode value={url}/>
            </main>
        </div>
    )
}

export default Ticket


