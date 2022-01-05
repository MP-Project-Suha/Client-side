import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Cart = ({myPendingTickets, getMyPendingTickets, order}) => {

const [tickets, setTickets] = useState([])
// useEffect(() => {
//     getMyPendingTickets()
// }, [])
// console.log(" order", order);
    return (

    
        <div className="all">
        {/* banner */}
        <div className="myEvent">
          <div className="cont">
            <p>
              <Link to="/"> Home </Link> -
            </p>
            <span>Cart</span>
          </div>
        </div>
        {/* main */}
        <div className="app-container">
{order && order? <>
{order.map(elem=>(
<p>{elem.ticket}:{elem.quantity>2? 2:1}</p> 
))}
  </>:<p>Your cart is empty</p>}
         
        </div>
        </div>
    )
}

export default Cart
