import React from 'react'
import { Link ,useLocation} from "react-router-dom";
import "./style.css"
const Footer = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <div className="footer">
             <img className="footerLogo" src="https://firebasestorage.googleapis.com/v0/b/recipes-notebook-5d870.appspot.com/o/images%2FUntitled%20design(u2).png?alt=media&token=276c8b0c-f776-4640-a23d-0db75751cd28"/>
            {/* <div>
            </div> */}
{/*     
            <ul id="navFooter">
  
  <li > <Link to="/">Home</Link></li> 
  <li>  <Link to="/Public">Public Events</Link></li> 
  <li > <Link to="/Events">My Events</Link></li> 
  <li > <Link to="/Tickets">My Tickets</Link></li> 

    </ul> */}
     <p> Copyright &copy; 2022 Suha Alhumaid</p>
        </div>
    )
}

export default Footer
