import React, { useState } from "react"
import { Link } from "react-router-dom";


export default function ItemCount({juego, precio, url,stock, initial, OnAdd}) {
  const [x, setX] = useState(initial);
  
  function chequearMenos(x) {
    if (x > 1) {
        x = x - 1;
    }
    return x
  }

  function chequearMas(x,stock, OnAdd) {
    if (x < stock) {
        x = x + 1;
        
    }
    return x
  }

  return (
    <>
      <div className="itemcount">
        <button onClick={() => setX(chequearMenos(x))}> - </button>
        <p>{x}</p>
        <button onClick={() => setX(chequearMas(x, stock, OnAdd))}> + </button>
        <br />
        <button onClick={() => setX(OnAdd(x))}>Añadir al carrito</button>
        <Link to={"/Carrito"}><button>Finalizar compra</button></Link>
      </div>
    </>
  );
}