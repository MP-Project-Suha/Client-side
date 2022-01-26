import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        {" "}
        <img
          className="footerLogo"
          src="https://firebasestorage.googleapis.com/v0/b/recipes-notebook-5d870.appspot.com/o/images%2FUntitled%20design(u2).png?alt=media&token=276c8b0c-f776-4640-a23d-0db75751cd28"
        />
      </Link>
      <p> Copyright &copy; 2022 Suha Alhumaid</p>
    </div>
  );
};

export default Footer;
