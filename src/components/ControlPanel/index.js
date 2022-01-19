import React, { useState, useEffect } from "react";
//packages
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link, useLocation } from "react-router-dom";

//react icons
import { TiDelete } from "react-icons/ti";

import "./style.css";
const ControlPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [users, setUsers] = useState([]);
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  useEffect(() => {
    getUsers();
  }, []);

  //Get all users for admin
  const getUsers = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${state.reducerLog.token}`,
        },
      });
      console.log(res.data);
      if (res.status === 200) {
        setUsers(res.data);
      } else {
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  //   /user/:_id
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
          <td> 
              {user.firstName + " " + user.lastName} </td>
              <td>{user.email} </td>
              <td>   <TiDelete
                onClick={(e) => {
                  e.preventDefault();
                  deleteUser(user._id);
                }}
                className="icon"
              /> </td>
       </tr>
          ))}
                    </tbody>
          </table>
      </main>
    </div>
  );
};

export default ControlPanel;
