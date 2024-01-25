import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer(props) {
  return (
    <div className="Customfooter">
      <div className="first">
      <Link to="/">
        <p>
        <i class="fa-regular fa-calendar-days"></i>
          <br />
          <span className="footer-text">Daily Orders</span>
        </p>
        </Link>
      </div>

      <div className="second">
    <Link to="/">
        <p>
          <i class="fa-solid fa-house"></i>
          <br />
          <span className="footer-text">Home</span>
        </p>
    </Link>
      </div>
  
      <div  className="third">
      <Link to="/">
        <p>
        <i class="fa-solid fa-basket-shopping"></i>
          <br />
          <span className="footer-text">Basket</span>
          <span className={`item-count ${props.count==0 ? "d-none": ""}`}> {props.count}</span>
        </p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
