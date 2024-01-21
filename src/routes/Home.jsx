import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import CustomSlider from "../components/Slider";
import Displaycategory from "../components/Displaycategory"


const sliderItems = [
{
id: 1,
src: 'assets/images/banner2.jpg',
alt: 'Image 1',
title: '',
description: '',
},
{
id: 2,
src: 'assets/images/banner2.jpg',
alt: 'Image 2',
title: '',
description: '',
},
// Add more items as needed
];
const Home = ()=>{
    return(
      <>
      
      <Navbar/>
      <CustomSlider items={sliderItems} />
      <h4 className="text-center" style={{borderTop:"1px solid grey",paddingTop:"10px",marginTop:"20px",paddingBottom:"0px"}} >Our Category</h4>
        <div className="textbar"></div>
      <div className="category">
        <Displaycategory img="vegetable.png"/>
        <Displaycategory img="vegetable.png"/>
        <Displaycategory img="vegetable.png"/>
        <Displaycategory img="vegetable.png"/>
      </div>
      <h4 className="text-center" style={{borderTop:"1px solid grey",paddingTop:"10px",marginBottom:"0px",paddingBottom:"0px"}} >Best Seller</h4>
      <div className="textbar"></div>
      <div className="category">
        <Displaycategory img="vegetable.png"/>
        <Displaycategory img="vegetable.png"/>
        <Displaycategory img="vegetable.png"/>
        <Displaycategory img="vegetable.png"/>
      </div>

      <Footer count="5"/>
      <div className="morespace"></div>
      </>
    );
}


export default Home;
