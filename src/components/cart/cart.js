import React from 'react';
import "./cart.css";
import Items from '../Items/items';
import { Scrollbars } from 'react-custom-scrollbars-2';
const Cart = () => { 
  return (
<>
<header>
  <div className='continue-shopping'>
  <img src="" alt='arrow'/>  
  </div>
</header>
<section> 
  <div className='main-cart-section'>
    <h1>Shopping Cart</h1>
    <p className='total-items-count'>you have <span className='total-items-count'>7</span>items</p>

    <div className='cart-items-container'>
    <Scrollbars>
{
   <Items/>
}
  </Scrollbars>

    </div>
  </div>

  <div className='card-total'>
    <h3>Card Total:<span>220rs:</span></h3>
  </div>
  <button>Checkout</button>
</section>
</>
  )
}

export default Cart;
