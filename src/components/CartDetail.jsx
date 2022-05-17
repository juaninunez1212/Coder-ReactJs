import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";

const CartDetail = () => {
  const { setTotal, setTotalItems, total, totalItems, cart, removeFromCart, buyAll } = useContext(CartContext);
  const [botonActivo, SetBotonActivo] = useState(false)
  console.log(cart);
  useEffect(() => {
    if (totalItems === 0) {
      SetBotonActivo(true)
    }
}, [totalItems]);
  


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
                      onClick={() => {
                        setTotal(total - (producto.count * producto.precio));
                        setTotalItems(totalItems - producto.count);  
                        removeFromCart(producto)
                      }}
                     
                    >
                      Remove
                    </button>
                    
                  </div>
                </div>
                <div>
                 

                  <input
                    disabled="disabled"
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
            <Link to={"/OrderCheck"}>
            <button disabled={botonActivo}
              onClick={buyAll}
              
            >
              Finalizar compra
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;