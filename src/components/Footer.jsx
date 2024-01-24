// import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <div className="Customfooter">
      <div className="first">
        <p>
        <i class="fa-solid fa-phone"></i>
          <br />
          <span className="footer-text">Support</span>
        </p>
      </div>

      <div className="second">
        <p>
          <i class="fa-solid fa-house"></i>
          <br />
          <span className="footer-text">Home</span>
        </p>
      </div>
      <div className="third">
        <p>
        <i class="fa-regular fa-calendar-days"></i>
          <br />
          <span className="footer-text">Daily Orders</span>
        </p>
      </div>
      <div className="fourth">
        <p>
        <i class="fa-solid fa-truck"></i>
          <br />
          <span className="footer-text">Your Orders</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
