import React from "react";

const Displaycategory = (props)=>{
    return(
        <div className="displaycategory">
        <img src={"assets/images/"+props.img} alt="product" className="left-part" />
        <span className="right-part">
            Vegetables
        </span>
        </div>
    );

}
export default Displaycategory;