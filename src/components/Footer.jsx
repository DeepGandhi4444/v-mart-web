// import { Link } from "react-router-dom";
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
      <div className="Customfooter">
     <div className="first">
      <p>
      <i class="fa-solid fa-border-all"></i>
     <br />
     <span className='footer-text'>
     Category
     </span>
      </p>
   
          </div>
     {/* <div className="bar"></div> */}
     
     <div className="second">
      <p>
     <i class="fa-solid fa-house"></i>
     <br />
     <span className='footer-text'>
     Category
     </span>
      </p>
     </div>
     {/* <div className="bar"></div> */}
     
     <div className="thrid">
<p>
     <i class="fa-solid fa-basket-shopping"></i>
     <br />
     <span className='footer-text'>
     Category
     </span>
</p>
     </div>
      </div>
  );
}

export default Footer;
