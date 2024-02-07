import React from "react";
import { Link } from "react-router-dom";

const Hit = ({ hit }) => {
  return (
    <>
      <Link to="/products">
        <div className={hit.className} key={hit.id}>
          <img
            src={"assets/images/" + hit.name}
            alt="product"
            className="left-part"
          />
          <div className="right-part">{hit.title}</div>
         
        </div>
      </Link>
    </>
  );
};
export default Hit;
