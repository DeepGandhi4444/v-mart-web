import React from "react";
import { Link } from "react-router-dom";

const Displaycard = ({ items }) => {
  return (

    <>
      {items.map((item) => (
        <Link to="/products">
        <div className={item.className} key={item.id}>
          <img
            src={"assets/images/" + item.name}
            alt="product"
            className="left-part"
          />
          <span className="right-part">{item.title}</span>
        </div>
        </Link>
      ))}
    </>
  );
};
export default Displaycard;
