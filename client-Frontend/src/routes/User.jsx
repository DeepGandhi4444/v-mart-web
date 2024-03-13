import React from 'react'
import { Link } from 'react-router-dom';
const User = ()=>{
    return(
        <>
        <body className='p-0'>
            

        <nav >
            <span> <i class="fa-solid fa-arrow-left"></i> </span>
             <span className='text-title'> My Account </span>
             <span><i class="fa-solid fa-headset"></i> support</span>
        </nav>
        <div className="profile ">
     <div className="bg-[rgb(63,214,176)] h-[150px] flex gap-4 ">
        <div className="profileimg border border-black border-4 p-[15px]  h-[120px] w-[120px] text-center m-[10px] rounded-full">
        <i class="fa-solid fa-user text-[85px]  "></i>
        </div>
        <div className="profiledetails text-center pt-[15px]">
        <span className='text-title'>Deep Gandhi</span><br />
        <span className='text-title'>7405796932</span>
        </div>
     </div>
        <div className="address flex gap-2 z-10 absolute top-[110px] left-[145px] bg-white h-[55px] w-[270px] rounded-lg p-[5px]">
           <div className=' flex flex-wrap  align-items-center'>
           <i className="fa fa-map-marker text-[25px]"></i>
            </div>
            <div>
            <span>62/B, </span>
            <span>Vishwamitri Township, Nr. Gujarat Tractor, Manjalpur</span>
            </div>
        </div>
        <div className="features">
        <ul>
            <li className=" h-[60px] w-full text-left pt-[15px]">
              <Link to="/"><i class="fa-solid fa-house"></i>  Home</Link>
            </li>
            <li className=" h-[60px] w-full text-left pt-[15px]">
              <Link to="/user"><i class="fa-solid fa-user"></i>  My Account</Link>
            </li>
            <li className=" h-[60px] w-full text-left pt-[15px]">
              <Link to="/products"><i class="fa-solid fa-bars"></i>  Category</Link>
            </li>
            <li className=" h-[60px] w-full text-left pt-[15px]">
              <Link to="/"><i class="fa-solid fa-basket-shopping"></i>  Basket</Link>
            </li>
            <li className=" h-[60px] w-full text-left pt-[15px]">
              <Link to="/"><i class="fa-solid fa-tags"></i>  Offers</Link>
            </li>
            <li className=" h-[60px] w-full text-left pt-[15px]">
              <Link to="/"><i class="fa-regular fa-comment"></i>  Feedback</Link>
            </li>
            <li className=" h-[60px] w-full text-left pt-[15px]">
              <Link to="/"><i class="fa-solid fa-headphones-simple"></i> Customer Services</Link>
            </li>
          </ul>
        </div>
        </div>
        </body>
        </>
    )
}
export default  User;