import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState } from "react"
import ItemCount from "./ItemCount";





export default function ItemDetail({url, juego, precio, stock}) {
  const productosCarrito = []
  

  function OnAdd (cantidad){
    
    if (cantidad == 1) {
      alert("Se añadio al carrito " + cantidad + " unidad del " + juego);
    } else {
      alert("Se añadieron al carrito " + cantidad + " unidadades del " + juego);
    }

    productosCarrito.push({juego: juego, precio: precio, url: url, cantidad: cantidad})
    console.log(productosCarrito);
     cantidad = 1;
     return cantidad
  }
  
  
  
  return (
    <>
    <div><div><img src={url} alt={juego} class="cartelera"/><div><h2>{juego}</h2><h3>${precio}</h3><p> bla bla bla bla bla bla</p><ItemCount juego={juego} precio={precio} url={url} stock={stock} initial={1} OnAdd={OnAdd}/></div></div></div>
    </>
  );
}