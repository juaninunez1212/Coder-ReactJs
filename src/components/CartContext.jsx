import React, { useState, createContext } from 'react';

const prueba = []
export const CartContext = createContext(prueba);

export default function CartContextProvider  (children) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // uso findIndex porque nos va a permitir acceder a la posición del array del producto que ya existe en nuestro cart
    // para modificar la cantidad del producto
    // en caso de que el producto no esté en nuestro cart, nos devuelve -1 y ahí agregamos nuestro producto al cart
    const indexProducto = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indexProducto !== -1) {
      const newCart = [...cart];
      newCart[indexProducto].count = newCart[indexProducto].count + item.count;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
      console.log("cartcontext OK");
    }
  };
  const removeFromCart = (id) => {
    // elimino del carrito el elemento que sea igual a mi id
    // filter => te va a devolver un array que cumpla con lo que vos pases en la condición de la función callback
    // [1,2,3,4,5].filter((number)=>number === 5)) => devolver un nuevo array [5]
    setCart(cart.filter((item) => item.id !== id));
    
  };
  // remueve todo del carrito
  const buyAll = () => setCart([]);

  return (
      
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyAll }}>
      {children}
    </CartContext.Provider>
  );
}

