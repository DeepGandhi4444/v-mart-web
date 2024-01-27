import React, { useState } from "react";

// import { Link } from "react-router-dom";
import Category from "../components/Category";
import Displaycard from "../components/Displaycard";

const vegetable = [
  {
    id: 1,
    name: "vegetable.png",
    className:"product displaycard",
    title: "carrot",
  },
  {
    id: 2,
    name: "vegetable.png",
    className:"product displaycard",
    title: "potato",
  },
  {
    id: 3,
    name: "vegetable.png",
    className:"product displaycard",
    title: "cauliflower",
  },
  {
    id: 4,
    name: "vegetable.png",
    className:"product displaycard",
    title: "corriander",
  },
  {
    id: 5,
    name: "vegetable.png",
    className:"product displaycard",
    title: "spinach",
  },
  // Add more items as needed
];

const Products = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const openAndclose = () => {
    isDropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true);
  };
  return (
    <>
      <div className="productsPageHeader products-dropdown">
        <div className="dropdown-default">
          Choose Category
          <button>
            <i
              className={`fa-solid fa-chevron-down ${
                isDropdownOpen ? "rotate180 " : ""
              } `}
              onClick={openAndclose}
            ></i>
          </button>
        </div>
        <hr />
        <div
          className={`dropdown-body ${
            isDropdownOpen ? "dropdown-body-open" : ""
          }`}
        >
          <Category />
        </div>
      </div>

      <main>
        <div>
          <h4
            className="text-center"
            style={{
              borderTop: "1px solid grey",
              paddingTop: "10px",
              marginTop: "20px",
              paddingBottom: "0px",
            }}
          >
            Products
          </h4>
          <div className="textbar"></div>
            <div className="product-line-container">
              <hr />
                <h5>Fruits and Vegetables</h5>
              <div className="product-line">
                <Displaycard items={vegetable}/>
                <span> more... </span>
              </div>
            </div>

            <div className="product-line-container">
              <hr />
                <h5>FoodGrains, Oils, and Masala</h5>
              <div className="product-line">
                <Displaycard items={vegetable}/>
                <span> more... </span>
              </div>
            </div>
            <div className="product-line-container">
              <hr />
                <h5>Bakery, Cakes, and Dairy </h5>
              <div className="product-line">
                <Displaycard items={vegetable}/>
                <span> more... </span>
              </div>
            </div>
            <div className="product-line-container">
              <hr />
                <h5>Beverages</h5>
              <div className="product-line">
                <Displaycard items={vegetable}/>
                <span> more... </span>
              </div>
            </div>
            <div className="product-line-container">
              <hr />
                <h5>Cleaning and Household </h5>
              <div className="product-line">
                <Displaycard items={vegetable}/>
                <span> more... </span>
              </div>
            </div>
        </div>
      </main>
      <div className="morespace"></div>
    </>
  );
};
export default Products;