import React from 'react';
import fakeData from '../.././fakeData/data'
import './Shop.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import { useState } from 'react';

console.log(fakeData)

const Shop = () => {
    const data=fakeData;
    const [cart,setCart]=useState([])
    const addHandler=(name)=>{
        console.log('clicked')
        const newCart=[...cart,name]
        setCart(newCart)
    }
    
    

    return (
        <div className="style-part">
            <div className="left-side">
               {
                data.map(course=><Course name={course} addHandler={addHandler}></Course>)
               }
            </div>
            <div>
                <Cart cart={cart} ></Cart>
            </div>
           
        </div>
    );
};

export default Shop;