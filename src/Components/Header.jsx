import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

function Header() {

  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <Navbar expand="lg" className="bg-primary text-white py-3" style={{ zIndex: 1 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <i className="fa-solid fa-shopping-cart fa-xl"></i> Ekart
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link
                className="fs-4 me-3 btn btn-outline-light border"
                style={{ textDecoration: "none", color: "white" }}
                to="/wishlist"
                onMouseEnter={(e) => (e.target.style.color = "black")} // light sky blue
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                Wish List <i className="fa-solid fa-heart"></i>
                <Badge className="ms-3 rounded" bg="light" text="dark">
                  {wishlist.length}
                </Badge>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="fs-4 me-3 btn btn-outline-light border"
                style={{ textDecoration: "none", color: "white" }}
                to="/cart"
                onMouseEnter={(e) => (e.target.style.color = "black")} // light blue
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                Cart <i className="fa-solid fa-cart-shopping"></i>
                <Badge className="ms-3 rounded" bg="light" text="dark">
                  {cart.length}
                </Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
