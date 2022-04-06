import React, { useState } from "react"


export default function ItemCount({stock, initial, OnAdd}) {
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
      <div>
        <button onClick={() => setX(chequearMenos(x))}> - </button>
        <p>{x}</p>
        <button onClick={() => setX(chequearMas(x, stock, OnAdd))}> + </button>
        <br />
        <button onClick={() => setX(OnAdd(x))}>Añadir al carrito</button>
      </div>
    </>
  );
}