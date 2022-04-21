import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartDetail = () => {
  const { cart, removeFromCart, buyAll } = useContext(CartContext);

  console.log(cart);

  return (
    <div>
      <div>
        <div>
          <div >
            <h1>Shopping Cart</h1>
            <h2 >{cart.length} Items</h2>
          </div>
          <div>
            <h3>
              Product Details
            </h3>
            <h3 >
              Quantity
            </h3>
            <h3 >
              Price
            </h3>
            <h3 >
              Total
            </h3>
          </div>
          {cart.length > 0 &&
            cart.map((producto) => (
              <div >
                <div >
                  <div >
                    <img  src={producto.image} alt='algo' />
                  </div>
                  <div>
                    <span>{producto.name}</span>
                    <span >Indoor</span>
                    <button
                      onClick={() => removeFromCart(producto.id)}
                     
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div>
                  <svg
                    
                    viewBox='0 0 448 512'
                  >
                    <path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
                  </svg>

                  <input
                    
                    type='text'
                    value={producto.count}
                    readOnly
                  />

                  <svg
                    
                    viewBox='0 0 448 512'
                  >
                    <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
                  </svg>
                </div>
                <span >
                  ${producto.price}
                </span>
                <span >
                  ${parseInt(producto.price) * parseInt(producto.count)}
                </span>
              </div>
            ))}
          <Link
            to='/'
            
          >
            <svg
             
              viewBox='0 0 448 512'
            >
              <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div id='summary' >
          <h1 >
            Order Summary
          </h1>
          <div >
            <span >Items 1</span>
            <span >$10</span>
          </div>
          <div>
            <label >
              Shipping
            </label>
            <select >
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
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
              <span>$600</span>
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