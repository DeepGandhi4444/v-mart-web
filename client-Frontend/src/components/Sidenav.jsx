// import { Link } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className={`sidenav ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidenav-header">
        <h3 className="text-dark sidenav-heading">Hello, user</h3>
        <i className="fa-solid fa-xmark close" onClick={closeSidebar}></i>
      </div>

      <div className="sidenav-body">
        <div className="top">
          <ul>
            <li><i class="fa-solid fa-location-dot"></i> Address</li>
            <li><i class="fa-solid fa-truck-fast"></i> Get it in 1 day</li>
          </ul>
        </div>
        <div className="bottom">
          <ul>
            <li>
              <Link to="/"><i class="fa-solid fa-house"></i>  Home</Link>
            </li>
            <li>
              <Link to="/"><i class="fa-solid fa-user"></i>  My Account</Link>
            </li>
            <li>
              <Link to="/"><i class="fa-solid fa-bars"></i>  Category</Link>
            </li>
            <li>
              <Link to="/"><i class="fa-solid fa-basket-shopping"></i>  Basket</Link>
            </li>
            <li>
              <Link to="/"><i class="fa-solid fa-tags"></i>  Offers</Link>
            </li>
            <li>
              <Link to="/"><i class="fa-regular fa-comment"></i>  Feedback</Link>
            </li>
            <li>
              <Link to="/"><i class="fa-solid fa-headphones-simple"></i> Customer Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
