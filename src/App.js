import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing"
import Login from "./components/Login";
const App = () => {
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });
  console.log(state.reducerLog);

  return (
    <div>
      <Header />
      <Login/>
      <Routes>
      <Route exact path="/" element={<Landing />} />
        </Routes>
    </div>
  );
};

export default App;
