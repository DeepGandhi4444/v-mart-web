import React from "react";
import { Link } from "react-router-dom";
import { useGlobalData } from "../AppContext";

const Hit = ({ items }) => {
  const {basketcount, setBasketcount} = useGlobalData();
  function addproduct(){
    setBasketcount( basketcount +1 );
  }
  return (
    <>
      {items.map((item, index) => (
      
   
        <div>

        <div className="card product" key={index}>
        <Link to="/products">
          <div className="card-img">
            <img src="assets/images/cabbage.jpg" alt="" />
          </div>
          </Link>
          <div className="card-info">
          <Link to="/products">
            <p className="text-title">{item.name}</p>
            </Link>
            <p className="text-body">Min. Quantity - 2 pc.</p>
          </div>
          <div className="card-footer flex items-center">
            <span className="text-title mr-2">$12</span>
            <div className="quantity-selector flex items-center m-2 ">
              <button className="quantity-btn bg-blue-500 text-white w-8 h-8 rounded-full text-sm mr-2">-</button>
              <input type="text" className=" w-3 h-8 text-center" id="quantity" value="0" readOnly />
              <button className="quantity-btn bg-blue-500 text-white w-8 h-8 rounded-full text-sm ml-2" >+</button>
            </div>

          </div>
        </div>
      
        </div>
      
      ))}
    </>
  );
};


export const LandscapeHit = ()=>{
  return(
    <div className="product-container">
    <div className="product-image">
        <img src="assets/images/cabbage.jpg" className="w-[100px] " alt="" />
    </div>
    <div className="product-details">
        <p className="name">Cabbage / Kobee / Bandhghobi</p>
        <div className="quantity-selector">
            <button className="quantity-btn rounded-full" onclick="decrementQuantity()">-</button>
            <input type="text" className="quantity-input" id="quantity" value="1" readonly/>
            <button className="quantity-btn rounded-full" onclick="incrementQuantity()">+</button>
        </div>
    </div>
</div>


  );
}


export default Hit;

