import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import axios from "axios";
import "./style.css";
import { Link ,useLocation} from "react-router-dom";
import QR from '../QR'
const Ticket = () => {
    const location = useLocation();
    const { pathname } = location;
    console.log(pathname);
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
            `${process.env.REACT_APP_BASE_URL}/myTicket/${_id}`,
            {
                headers: {
                  Authorization: `Bearer ${state.reducerLog.token}`,
                },
              }
          );
    console.log(result.data);
          if (result.data) {
            setTicket(result.data);
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
              <QRCode value={pathname}/>
            </main>
        </div>
    )
}

export default Ticket
