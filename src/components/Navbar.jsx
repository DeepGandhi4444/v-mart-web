import { Link } from "react-router-dom";
import Sidebar from "./Sidenav";
import React, { useState } from "react";
// import Basket from "./Basket";
function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  return (
    <>
      <header className="fixed-top">
        {/* navbar starts here  */}
        <nav >
          {/* left part here */}
          <div className="left-nav" onClick={openSidebar}>
            <i className="fa-solid fa-bars "></i>
          </div>

          {/* center part here */}
          <div className="center-nav logoimg">
            <Link to="/">
              <img src="assets/images/mainlogo.png" alt="" />
            </Link>
          </div>

          {/* right part here */}
          <div className="right-nav profile ">
            <i class="fa-regular fa-user"></i>
          </div>
        </nav>
        {/* navbar ends here */}

        {/* search bar is here */}

        <div className="search-bar">
          <input
            type="search"
            id="search-input"
            placeholder="Search for products..."
          />
          <button type="submit" id="search-button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/*basket compenent is here  */}
        {/* <Basket count="6" /> */}

        {/* sidebar goes here */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </header>
    </>
  );
}

export default Navbar;
