import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";

const Verify = () => {
  const { token2 } = useParams();
  const [ setMessage] = useState("null");

  useEffect(() => {
    verify();
  });

  const verify = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/verify/${token2}`
      );
      setMessage(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="box flex">
        <h1 className="boxTitle">Thank you for Verify your account . Please</h1>
        <Link to="/">Log in</Link>
      </div>
    </div>
  );
};

export default Verify;
