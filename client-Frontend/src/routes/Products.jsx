import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Hit from "../components/Hit";
import { getList } from "../queries";

// var temp = [
//   {
//     name: "apple",
//     synonyms: ["fruit", "red fruit", "edible fruit"],
//   },
//   {
//     name: "banana",
//     synonyms: ["yellow fruit", "tropical fruit", "curved fruit"],
//   },
//   {
//     name: "bread",
//     synonyms: ["loaf", "sliced bread", "baked goods"],
//   },
//   {
//     name: "milk",
//     synonyms: ["dairy", "fresh milk", "cow's milk"],
//   },
//   {
//     name: "eggs",
//     synonyms: ["chicken eggs", "white eggs", "protein"],
//   },
//   {
//     name: "rice",
//     synonyms: ["grains", "white rice", "staple"],
//   },
// ];

const Products = () => {
  
  const { loading, error, data } = useQuery(getList);

  const items = data ? data.getProducts : [];
    
  if (loading) {
    return <p> Loading . . .</p>;
  } else if (error) {
    return <p>Error! Try again . . .</p>;
  } else {

  return (
    <>
      <main>
        <div>
          <h3
            className="text-center text-title"
            style={{
              paddingTop: "10px",
              marginTop: "20px",
              paddingBottom: "0px",
            }}
          >
            Products
          </h3>
          <div className="textbar"></div>
          <div className="product-line-container">
            <hr />
            <h5 className="text-title">Fruits and Vegetables</h5>
            <div className="product-line">
              <Hit items={items} />
              <span className=" card justify-content-center text-center text-title">
              
                more...
              </span>
            </div>
          </div>

          <div className="product-line-container">
            <hr />
            <h5 className="text-title">FoodGrains, Oils, and Masala</h5>
            <div className="product-line">
              <Hit items={items} />
              <span className="card justify-content-center text-center text-title">
                
                more...
              </span>
            </div>
          </div>
          <div className="product-line-container">
            <hr />
            <h5 className="text-title">Bakery, Cakes, and Dairy </h5>
            <div className="product-line">
              <Hit items={items} />
              <span className="card justify-content-center text-center text-title">
                
                more...
              </span>
            </div>
          </div>
          <div className="product-line-container">
            <hr />
            <h5 className="text-title">Beverages</h5>
            <div className="product-line">
              <Hit items={items} />
              <span className="card justify-content-center text-center text-title">
                
                more...
              </span>
            </div>
          </div>
          <div className="product-line-container">
            <hr />
            <h5 className="text-title">Cleaning and Household </h5>
            <div className="product-line">
              <Hit items={items} />
              <span className="card justify-content-center text-center text-title">
                
                more...
              </span>
            </div>
          </div>
        </div>
      </main>
      <div className="morespace"></div>
    </>
  );
          }
};
export default Products;
