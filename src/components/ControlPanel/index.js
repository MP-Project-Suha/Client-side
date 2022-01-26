import React, { useState, useEffect } from "react";
//packages
import axios from "axios";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link, useLocation } from "react-router-dom";

//react icons
import { TiDelete } from "react-icons/ti";
import {FcApproval} from "react-icons/fc"

import "./style.css";
const ControlPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [users, setUsers] = useState([]);
  const [pendingEvents, setPendingEvents] = useState([]);

  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  useEffect(() => {
    getUsers();
    getPendingEvents();
    // eslint-disable-next-line 
  }, []);

  //Get all users for admin
  const getUsers = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${state.reducerLog.token}`,
        },
      });
    
      if (res.status === 200) {
        setUsers(res.data);
      } else {
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  //Delete user for admin
  const deleteUser = async (_id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/user/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );
      console.log(res);
      if (res.status === 201) {
        getUsers();
      } else {
      }
    } catch (error) {
      console.log(error.response);
    }
  };

    //GET ALL PENDING EVENTS
    const getPendingEvents = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/controlEvents`,
          {
            headers: {
              Authorization: `Bearer ${state.reducerLog.token}`,
            },
          }
        );
        if (res.status === 200) {
          setPendingEvents(res.data)
        } else {
        }
      } catch (error) {
        console.log(error.response);
      }
    };

    //Approve Event
    const approveEvent = async (_id) => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_BASE_URL}/controlEvent/${_id}`,{},
          {
            headers: {
              Authorization: `Bearer ${state.reducerLog.token}`,
            },
          }
        );
        console.log(res);
        if (res.status === 200) {
          getPendingEvents()
        } else {
        }
      } catch (error) {
        console.log(error.response);
      }
    };

  return (
    <div>
      {/* banner */}
      <div className="myEvent">
        <div className="cont">
          <p>
            <Link to="/"> Home </Link> - {splitLocation[1]}
          </p>
          <span>Dashboard</span>
        </div>
      </div>

      {/* main */}
      <main className="event card contentEvent">
      <h1>PENDING EVENTS</h1>
      <table className="table">
         
         <thead>
           <tr>
             <th>Title</th>
             <th>Created By</th>
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
         
         {pendingEvents&&
              pendingEvents.map((event) => (
                <tr>
                  <td onClick={(e)=>{
                 
                    navigate(`/Event/${event._id}`)}}
                    style={{cursor: "pointer"}}
                    >{event.title} </td>
                  <td>{event.createdBy.email} </td>
                  <td>
                    <FcApproval
                      onClick={(e) => {
                        e.preventDefault();
                        approveEvent(event._id)
                      }}
                      className="icon"
                    />
                  </td>
                </tr>
              ))}
         </tbody>
        </table>

      <h1>USERS INFORMATION</h1>
        <table className="table">
         
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr>
                  <td>{user.firstName + " " + user.lastName} </td>
                  <td>{user.email} </td>
                  <td>
                    <TiDelete
                      onClick={(e) => {
                        e.preventDefault();
                        deleteUser(user._id);
                      }}
                      className="icon"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ControlPanel;
