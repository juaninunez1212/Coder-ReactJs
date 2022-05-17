import React, { useState } from "react"
import { Link } from "react-router-dom";


export default function ItemCount({stock, onAdd}) {
  const [count, setCount] = useState(1);
  
  

  return (
    <>
      <div>
        <button id="menos" onClick={() => {
              if (count > 1) setCount(count - 1);
            }}
        > - </button>
        <input id="numero" value={count}  disabled/>
        <button id="mas" onClick={() => {
              if (count < stock) setCount(count + 1);
        }}> + </button>
        <br />
        
        <button id="botonAgr" onClick={() => onAdd(count)}>Añadir al carrito</button>
        
        <Link  to={"/Carrito"}><button id="FinalizarBtn" >Finalizar compra</button></Link>
      </div>
    </>
  );
}