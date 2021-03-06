import React, { useState, createContext } from 'react';
import { Link } from 'react-router-dom';
import FormularioCompraContainer from '../components/FormularioCompraContainer';



export const CartContext = createContext();

export default function CartContextProvider  ({children}) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const addToCart = (item) => {
    // uso findIndex porque nos va a permitir acceder a la posición del array del p   |roducto que ya existe en nuestro cart
    // para modificar la cantidad del producto
    // en caso de que el producto no esté en nuestro cart, nos devuelve -1 y ahí agregamos nuestro producto al cart
    const indexProducto = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indexProducto !== -1) {
      const newCart = [...cart];
      newCart[indexProducto].count = newCart[indexProducto].count + item.count;
      setCart(newCart);
    } else {
      setCart([...cart, { juego: item.juego, precio: item.precio, count: item.count, url: item.url, id: item.id, stock: item.stock }]);
      
      console.log(cart);
    }
  };
  const removeFromCart = (producto) => {
    // elimino del carrito el elemento que sea igual a mi id
    // filter => te va a devolver un array que cumpla con lo que vos pases en la condición de la función callback
    // [1,2,3,4,5].filter((number)=>number === 5)) => devolver un nuevo array [5]
    setCart(cart.filter((item) => item.id !== producto.id));
    
    
  };
  // remueve todo del carrito
  const buyAll = () =>{
    setCart([]);
    setTotal();
    setTotalItems();
    window.location = "/"
  }

  return (
      
    <CartContext.Provider value={{ setTotal, setTotalItems, total, totalItems, cart, addToCart, removeFromCart, buyAll }}>
      {children}
    </CartContext.Provider>
  );
}

