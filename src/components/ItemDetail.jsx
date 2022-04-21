
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";





export default function ItemDetail(producto) {
  const [count, setCount] = useState(1);
  

  // function OnAdd (cantidad){
    
  //   if (cantidad == 1) {
  //     alert("Se añadio al carrito " + cantidad + " unidad del " + juego);
  //   } else {
  //     alert("Se añadieron al carrito " + cantidad + " unidadades del " + juego);
  //   }

    
  //    cantidad = 1;
  //    return cantidad
  // }
  
  
  
  return (
    <>
    <div>
      <div>
      |<img src={producto.url} alt={producto.juego} class="cartelera"/>
        <div>
          <h2>{producto.juego}</h2>
          <h3>${producto.precio}</h3>
          <p> bla bla bla bla bla bla</p>
          <div className="itemcount">
            <button onClick={() => {
              if (count > 1) setCount(count - 1);
            }}
            > - </button>
            <input value={count}  disabled/>
            <button onClick={() => {
              if (count < 5) setCount(count + 1);
            }}> + </button>
            <br />
            <button onClick={() => <AddToCart message='Add to cart' btnContent='Add to cart' count={count} setCount={setCount} plant={producto} />}>Añadir al carrito</button>
            <Link to={"/Carrito"}><button>Finalizar compra</button></Link>
          </div>
        </div>
      </div> 
    </div>
    </>
  );
}