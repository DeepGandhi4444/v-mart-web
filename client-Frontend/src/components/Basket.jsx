import React from 'react'

const Basket = (props)=>{
    return(
        <div className='basket'>
            <span className='basket-count'>
                {props.count}
            </span> <i class="fa-solid fa-basket-shopping"></i>
           
        </div>
    );
}

export default Basket;