import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

function ProductCart() {
  const items = useSelector((state) => state.allCarts.items);
  const dispatch = useDispatch();

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
          {items?.map((item)=> (

        
          <MDBCol size="4" key={item.id}>
            <MDBCard>
              <MDBCardImage src={item.img} position="top" alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>
                 {item.price}
                </MDBCardText>
                <MDBBtn onClick={() => dispatch(addToCart(item))}>Add To Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
            ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default ProductCart;
