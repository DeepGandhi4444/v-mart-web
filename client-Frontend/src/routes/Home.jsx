import React from "react";
// import { useEffect, useState } from "react";
import CustomSlider from "../components/Slider";
import Hit from "../components/Hit";
import { getList } from "../queries";
import { useQuery } from "@apollo/client";
import Navbar from "../components/Navbar";
var sliderItems = [
  {
    id: 1,
    src: "assets/images/img1.jpg",
    alt: "Image 2",
    title: "",
    description: "",
  },
  {
    id: 2,
    src: "assets/images/img2.jpg",
    alt: "Image 2",
    title: "",
    description: "",
  },
  {
    id: 2,
    src: "assets/images/img3.jpg",
    alt: "Image 2",
    title: "",
    description: "",
  },
];

const Home = () => {


const { loading, error, data } = useQuery(getList);
 
  const items = data ? data.getProducts : [];

  if (loading) {
    return <p> Loading . . .</p>;
  } else if (error) {
    return <p>Error! Try again . . .</p>;
  } else {
    return (
      <>
        <Navbar/>
        <div className="upperspace"></div>
        <CustomSlider items={sliderItems} />

        <h4
          className="text-center text-title"
          style={{
            paddingTop: "10px",
            marginTop: "20px",
            paddingBottom: "0px",
          }}
        >
          Category
        </h4>
        <div className="textbar mt-1"></div>
        <div className="category">
          <div className="product-line">
            <Hit items={items} />
          </div>
        </div>
        <h4
          className="text-center text-title"
          style={{
           
            paddingTop: "10px",
            marginBottom: "0px",
            paddingBottom: "0px",
          }}
        >
          Best Seller
        </h4>
        <div className="textbar mt-1"></div>
        <div className="category bestseller">
          <div className="product-line">
            <Hit items={items} />
          </div>
        </div>

        <div className="morespace"></div>
      </>
    );
  }
};

export default Home;
