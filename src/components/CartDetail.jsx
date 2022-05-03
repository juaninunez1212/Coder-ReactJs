import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';

const CartDetail = () => {
  const { total, totalItems, cart, removeFromCart, buyAll } = useContext(CartContext);
  
  console.log(cart);


  return (
    <div>
      <div>
        <div>
          <div >
            <h1>Shopping Cart</h1>
            <h2 >{totalItems} Items</h2>
          </div>
         
          {cart.length > 0 &&
            cart.map((producto) => (
              <div >
                <div >
                  <div >
                    <img  class="cartelera espacio" src={producto.url} alt='algo' />
                  </div>
                  <div>
                    <span>{producto.juego}</span>
                    
                    <button
                      onClick={() => removeFromCart(producto.id)}
                     
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div>
                 

                  <input
                    
                    type='text'
                    value={producto.count}
                    readOnly
                  />

                  
                </div>
                
                <span >
                  ${parseInt(producto.precio) * parseInt(producto.count)}
                 
                </span>
                <span >
                  (${producto.precio} c/u)
                </span>
              </div>
            ))}
          <Link
            to='/'
            
          >
            
            Continue Shopping
          </Link>
        </div>

        <div id='summary' >
          
          <div className='py-10'>
            <label
              htmlFor='promo'
              
            >
              Promo Code
            </label>
            <input
              type='text'
              id='promo'
              placeholder='Enter your code'
              
              readOnly
            />
          </div>
          <button>
            Apply
          </button>
          <div >
            <div >
              <span>Total cost</span>
              <span>${total}</span>
            </div>
            <button
              onClick={buyAll}
              
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;