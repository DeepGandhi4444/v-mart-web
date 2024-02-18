import React from "react";
// import { Link } from 'react-router-dom';
import CustomSlider from "../components/Slider";
import Hit from "../components/Hit";

var temp = [
  {
    name: "apple",
    synonyms: ["fruit", "red fruit", "edible fruit"],
  },
  {
    name: "banana",
    synonyms: ["yellow fruit", "tropical fruit", "curved fruit"],
  },
  {
    name: "bread",
    synonyms: ["loaf", "sliced bread", "baked goods"],
  },
  {
    name: "milk",
    synonyms: ["dairy", "fresh milk", "cow's milk"],
  },
  {
    name: "eggs",
    synonyms: ["chicken eggs", "white eggs", "protein"],
  },
  {
    name: "rice",
    synonyms: ["grains", "white rice", "staple"],
  },
];
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
  return (
    <>
      {/* <Navbar/> */}
      <CustomSlider items={sliderItems} />

      <h4
        className="text-center"
        style={{
          borderTop: "1px solid grey",
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
          <Hit items={temp} />
        </div>
      </div>
      <h4
        className="text-center"
        style={{
          borderTop: "1px solid grey",
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
          <Hit items={temp} />
        </div>
      </div>

      <div className="morespace"></div>
    </>
  );
};

export default Home;
