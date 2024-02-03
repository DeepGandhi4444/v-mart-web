import React from 'react'
// import { Link } from 'react-router-dom';
import CustomSlider from "../components/Slider";



var sliderItems = [
  {
  id: 1,
  src: 'assets/images/img1.jpg',
  alt: 'Image 2',
  title: '',
  description: '',
  },
  {
  id: 2,
  src: 'assets/images/img2.jpg',
  alt: 'Image 2',
  title: '',
  description: '',
  },
  {
    id: 2,
    src: 'assets/images/img3.jpg',
    alt: 'Image 2',
    title: '',
    description: '',
    }
  ];


const Home = ()=>{
    return(
      <>
      
      {/* <Navbar/> */}
      <CustomSlider items={sliderItems} />

      <h4 className="text-center" style={{borderTop:"1px solid grey",paddingTop:"10px",marginTop:"20px",paddingBottom:"0px"}} >Category</h4>
        <div className="textbar"></div>
      <div className="category">
      
  
       
      </div>
      <h4 className="text-center" style={{borderTop:"1px solid grey",paddingTop:"10px",marginBottom:"0px",paddingBottom:"0px"}} >Best Seller</h4>
      <div className="textbar"></div>
      <div className="category bestseller">
     
      
      </div>

      <div className="morespace"></div>
      </>
    );
}


export default Home;
