import React from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Card } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/Slices/cartSlice";

function Home() {
  const dispatch = useDispatch()
  const data = useFetch("https://dummyjson.com/products");
  console.log(data);

  return (
    <Row className="ms-5" style={{ marginTop: "100px" }}>
      {data?.length > 0 ? (
        data.map((product, index) => (
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
                  <p> {product?.description.slice(0, 50)} ....</p>
                  <h5> </h5>
                  <h5>${product?.price}</h5>
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button onClick={()=>dispatch(addToWishlist(product))} variant="btn btn-light">
                    <i className="fa-solid fa-heart text-danger fa-2x"></i>
                  </Button>
                  <Button variant="btn btn-light">
                    <i onClick={()=>dispatch(addToCart(product))} className="fa-solid fa-cart-plus text-success fa-2x"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p>No data available</p>
      )}
    </Row>
  );
}

export default Home;
