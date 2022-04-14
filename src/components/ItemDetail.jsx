import React, { useState } from "react"

import ItemCount from "./ItemCount";

function OnAdd (cantidad, stock){
    
  if (cantidad == 1) {
    alert("Se añadio al carrito " + cantidad + " unidad");
  } else {
    alert("Se añadieron al carrito " + cantidad + " unidadades");
  }
 
   cantidad = 1;
   return cantidad
}


export default function ItemDetail({url, juego, precio}) {
   
  
  return (
    <>
    <div><div><img src={url} alt={juego} class="cartelera"/><div><h2>{juego}</h2><h3>${precio}</h3><p> bla bla bla bla bla bla</p><ItemCount stock={5} initial={1} OnAdd={OnAdd}/></div></div></div>
    </>
  );
}