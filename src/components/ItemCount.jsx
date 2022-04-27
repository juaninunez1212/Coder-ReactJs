import React, { useState } from "react"
import { Link } from "react-router-dom";


export default function ItemCount({stock, OnAdd}) {
  const [count, setCount] = useState(1);
  
  

  return (
    <>
      <div className="itemcount">
        <button onClick={() => {
              if (count > 1) setCount(count - 1);
            }}
        > - </button>
        <input value={count}  disabled/>
        <button onClick={() => {
              if (count < stock) setCount(count + 1);
        }}> + </button>
        <br />
        <button onClick={() => OnAdd(count)}>Añadir al carrito</button>
        <Link to={"/Carrito"}><button>Finalizar compra</button></Link>
      </div>
    </>
  );
}