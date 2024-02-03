import React from "react";
import { Link } from "react-router-dom";
import { Highlight } from "react-instantsearch";
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
          
            <Highlight
              attribute="title"
              hit={hit}
              classNames={{
                root: "right-part",
                highlighted: "inline",
                nonHighlighted:"inline",
                separator:"",
              }}
            />
         
        </div>
      </Link>
    </>
  );
};
export default Hit;
