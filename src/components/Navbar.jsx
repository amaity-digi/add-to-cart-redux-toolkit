import {MDBBtn} from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal } from "../features/cartSlice";

function Navbar() {
  const {cart, totalQuantity} = useSelector((state) => state.allCarts);
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(getCartTotal())
  },[cart])
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
    <div className="container-fluid"> 
      <a className="navbar-brand">Navbar</a>
      <Link to="/">All Products</Link>
      <MDBBtn color='light' rippleColor='dark'>
        <Link to="/cart">
        Cart({totalQuantity})
        </Link>
      </MDBBtn>
    </div>
  </nav>
  )
}

export default Navbar
