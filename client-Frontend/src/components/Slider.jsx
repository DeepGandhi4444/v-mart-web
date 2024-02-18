
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
         </div>
       ))}
     </Slider>
   );
 };
 export default CustomSlider;