import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart)
    const cart=props.cart
    
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total= total+parseInt(element.price)
        
    }

    return (
        <div className="cart-design">
            <h2 style={{textAlign:'center'}}>COURSE ORDER</h2>
            <h4>Total Enroll:{props.cart.length}</h4>
             <h4>Total Price: ${total}</h4>
        </div>
    );
};

export default Cart;