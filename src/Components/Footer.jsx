import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="footer d-flex flex-column justify-content-center align-items-center bg-primary text-white py-3"
      style={{ width: "100%" }}
    >
      <h2 className="mb-3">{"                    "}</h2>
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap px-3">
        <div className="detail-div text-center mb-3 px-2">
          <h4>About Us</h4>
          <ul>
            <li>
              <strong>Who we are:</strong> Ekart is your one-stop online shop
              for all your needs.
            </li>
            <li>
              <strong>What we do:</strong> We offer a wide range of products at
              affordable prices.
            </li>
            <li>
              <strong>Our promise:</strong> Your orders will be delivered right
              to your doorstep.
            </li>
          </ul>
        </div>
        <div className="links d-flex flex-column mb-3 px-2">
          <h4>Quick Links</h4>
          <Link
            style={{ textDecoration: "none" }}
            to={"/"}
            className="text-white"
          >
            Home
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={"/cart"}
            className="text-white"
          >
            Cart
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={"/wishlist"}
            className="text-white"
          >
            Wishlist
          </Link>
        </div>
        <div className="contact-us mb-3 px-2">
          <h4>Subscribe to Our Newsletter</h4>
          <form className="d-flex mt-2">
            <input
              type="email"
              className="form-control me-2"
              placeholder="Enter your Email"
            />
            <button className="btn btn-outline-light">Subscribe</button>
          </form>
        </div>
        <div className="socials d-flex justify-content-center w-100 mt-2 px-2">
          <Link to={"https://facebook.com/yourshoppingsite"}>
            <i
              className="fab fa-facebook fs-3 text-white"
              style={{ marginRight: "15px" }}
            ></i>
          </Link>
          <Link to={"https://twitter.com/yourshoppingsite"}>
            <i
              className="fab fa-twitter fs-3 text-white"
              style={{ marginRight: "15px" }}
            ></i>
          </Link>
          <Link to={"https://instagram.com/yourshoppingsite"}>
            <i className="fab fa-instagram fs-3 text-white"></i>
          </Link>
        </div>
      </div>
      <div className="text-center mt-3 px-3">
        © 2023 Ekart, Inc. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
