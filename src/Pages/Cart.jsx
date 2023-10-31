import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/Slices/cartSlice";
import { emptyFromCart } from "../redux/Slices/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const[total,setTotal] = useState(0)
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const getCartTotal = () =>{
    if(cart.length>0){
     setTotal(cart.map((item)=>item.price).reduce((p1,p2)=>p1+p2))

    }else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getCartTotal()
  },[cart])


  const hanldeCheckout = ()=>{
    dispatch(emptyFromCart())
    alert("Congratulations, Your Order Has Been Successfully Placed!")
    nav('/')

  }

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <Link
        style={{
          textDecoration: "none",
          position: "absolute",
          top: "20px",
          left: "10px",
          marginTop: "125px",
        }}
        className="btn btn-primary rounded-pill ms-4"
        to={"/"}
      >
        <h5>
          {" "}
          <i class="fa-solid fa-arrow-left"></i> Back to Home
        </h5>
      </Link>
      {cart.length > 0 ? (
        <div className="row mt-5">
          <div className="col-lg-7">
            <table className="table shadow border">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th> {/* Fixed typo 'h' to 'th' */}
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>
                      <img
                        width={"100px"}
                        height={"100px"}
                        src={product.thumbnail}
                        alt={product.title} // Added 'alt' attribute
                      />
                    </td>
                    <td>${product.price}</td>
                    <td>
                      <button
                        onClick={() => dispatch(removeFromCart(product.id))}
                        className="btn"
                      >
                        <i className="fa-solid fa-trash text-danger fa-2x"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-1"> </div>

          <div className="col-lg-4">
            <div className="border p-3 rounded shadow">
              <h1 className="text-primary">Cart Summary</h1>
              <h4 className="mt-3">
                Total Products:<span>{cart.length}</span>
              </h4>
              <h4>
                {" "}
                Total:<span className="text-danger fw-bolder fs-2">
                  $ {total}
                </span>{" "}
              </h4>
              <div className="d-grid mt-5">
                <button onClick={hanldeCheckout} className="btn btn-success rounded">Check out</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ height: "60vh" }}
          className="w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <img
            height={"250px"}
            src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif"
          />
          <h3 className="fw-bolder text-primary mt-4">
            Your Cart is Empty!!!{" "}
          </h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
