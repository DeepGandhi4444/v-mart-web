import { Link } from "react-router-dom";
import React from "react";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidenav-header">
        <h3 className="text-dark sidenav-heading">Category</h3>

        <i className="fa-solid fa-xmark close" onClick={closeSidebar}></i>
      </div>

      <ul>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="link-hover" to="/">
            Fruits and vegetables{" "}
          </Link>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="link-hover" to="/">
            FoodGrains, Oils, and Masala{" "}
          </Link>
          <span className="badge badge-primary badge-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="link-hover" to="/">
            Bakery, Cakes, and Dairy{" "}
          </Link>
          <span className="badge badge-primary badge-pill">1</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="link-hover" to="/">
            Beverages{" "}
          </Link>
          <span className="badge badge-primary badge-pill">6</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="link-hover" to="/">
            Snacks and Branded Foods{" "}
          </Link>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="link-hover" to="/">
            Beuaty and Hygine{" "}
          </Link>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="link-hover" to="/">
            Cleaning and Household{" "}
          </Link>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="link-hover" to="/">
            Kitchen, Garden and Pets{" "}
          </Link>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="link-hover" to="/">
            Eggs, Meats and Fish{" "}
          </Link>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="link-hover" to="/">
            Baby care
          </Link>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
