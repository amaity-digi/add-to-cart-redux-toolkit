import {MDBBtn} from "mdb-react-ui-kit";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
    <div className="container-fluid"> 
      <a className="navbar-brand">Navbar</a>
      <span>All Products</span>
      <MDBBtn color='light' rippleColor='dark'>
        Cart(0)
      </MDBBtn>
    </div>
  </nav>
  )
}

export default Navbar
