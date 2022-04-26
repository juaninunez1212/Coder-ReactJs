import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState } from "react"
import ItemCount from "./ItemCount";





export default function ItemDetail(producto) {
 
  

  function OnAdd (cantidad){
    
    if (cantidad == 1) {
      alert("Se añadio al carrito " + cantidad + " unidad del " );
    } else {
      alert("Se añadieron al carrito " + cantidad + " unidadades del " );
    }

    
     cantidad = 1;
     return cantidad
  }
  
  
  
  return (
    <>
    <div>
      <div>
        <img src={producto.url} alt={producto.juego} class="cartelera"/>
        <div>
          <h2>{producto.juego}</h2>
          <h3>${producto.precio}</h3>
          <p> bla bla bla bla bla bla</p>
          <ItemCount stock={producto.stock} initial={1} OnAdd={OnAdd}/>
          </div>
      </div>
    </div>
    </>
  );
}