// import { Link } from "react-router-dom";
// function Slider(){
//  return(

// <section className="slider_section">
//          <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">

//             <div className="carousel-inner">
//                <div className="carousel-item active">
//                   <img className="first-slide" src="assets/images/banner2.jpg" alt="First slide"/>
//                   <div className="container">
//                      <div className="carousel-caption relative">
//                         <h1>Our <br/> <strong className="black_bold">Latest </strong><br/>
//                            <strong className="yellow_bold">Product </strong></h1>
//                         <p>first slide <br/>
//                           eader will be distracted by the readable content of a page </p>
//                         <Link  to="products">see more Products</Link>
                     
//                   </div>
//                   </div>
//                </div>
//                <div className="carousel-item">
//                   <img className="second-slide" src="assets/images/banner2.jpg" alt="Second slide"/>
//                   <div className="container">
//                      <div className="carousel-caption relative">
//                         <h1>Our <br/> <strong className="black_bold">Latest </strong><br/>
//                            <strong className="yellow_bold">Product </strong></h1>
//                         <p>Second Slide <br/>
//                           eader will be distracted by the readable content of a page </p>
//                         <Link  to="products">see more Products</Link>
//                      </div>
//                   </div>
//                </div>
//                <div className="carousel-item">
//                   <img className="third-slide" src="assets/images/banner2.jpg" alt="Third slide"/>
//                   <div className="container">
//                      <div className="carousel-caption relative">
//                         <h1>Our <br/> <strong className="black_bold">Latest </strong><br/>
//                            <strong className="yellow_bold">Product </strong></h1>
//                         <p>Thrid Slide<br/>
//                           eader will be distracted by the readable content of a page </p>
//                         <Link  to="products">see more Products</Link>
//                      </div>
//                   </div>
//                </div>

//             </div>
//             <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
//             <i className='fa fa-angle-right'></i>
//             </a>
//             <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
//             <i className='fa fa-angle-left'></i>
//             </a>
            
//          </div>

//       </section>

//  )  ; 
// }

// export default Slider;




import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};
const CustomSlider = ({ items }) => {
 
   return (
     <Slider {...settings}>
       {items.map((item) => (
         <div key={item.id}>
           <img src={item.src} alt={item.alt} />
           {/* <h3>{item.title}</h3>
           <p>{item.description}</p> */}
         </div>
       ))}
     </Slider>
   );
 };
 export default CustomSlider;