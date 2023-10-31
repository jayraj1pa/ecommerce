import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromWishList } from "../redux/wishlistSlice";
import { addToCart } from "../redux/Slices/cartSlice";

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  const handleWishlistCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromWishList(product.id));
  };

  return (
    <div style={{ marginTop: "100px" }}>
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
      <Row className="m-5">
        {wishlistArray?.length > 0 ? (
          wishlistArray.map((product, index) => (
            <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
              <Card
                className="shadow rounded"
                style={{ width: "18rem", height: "25rem" }}
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={product?.thumbnail}
                />
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <Card.Text>
                    <p>{product?.description.slice(0, 50)} ....</p>
                    <h5></h5>
                    <h5>${product?.price}</h5>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      onClick={() => dispatch(removeFromWishList(product?.id))}
                      variant="btn btn-light"
                    >
                      <i
                        title="Delete"
                        className="fa-solid fa-trash text-danger fa-2x"
                      ></i>
                    </Button>
                    <Button
                      onClick={(e) => handleWishlistCart(product)}
                      variant="btn btn-light"
                    >
                      <i className="fa-solid fa-cart-plus text-success fa-2x"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
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
              Your Wishlist is Empty!!!{" "}
            </h3>
          </div>
        )}
      </Row>
    </div>
  );
}

export default Wishlist;
