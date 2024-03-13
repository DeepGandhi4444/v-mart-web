import { Link } from "react-router-dom";
import Sidebar from "./Sidenav";
import React, { useState, useEffect } from "react";
import Search from "./Search";

// import Basket from "./Basket";



// const dbdata = fetch("localhost:5000/api/products...");


function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [items, setItems] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products...');
        const data = await response.json();
       console.log(data);
       setItems(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  return (
    <>
      <header className="fixed-top">
        {/* navbar starts here  */}
        <nav>
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
          <Link to="/user">
          <div className="text-black rounded-[50%] border-1 border-black w-[30px] h-[30px] text-center">
            <i class="fa-regular fa-user"></i>
          </div>
          </Link>
        </nav>
        {/* navbar ends here */}

        {/* search bar is here */}

       <Search items={items}/>

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
