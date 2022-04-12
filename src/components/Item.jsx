import React, { useState } from "react"
import ItemDetailContainer from './ItemDetailContainer';

export default function Item({productos}) {
  

  return (
    <>
        <div id="catalogo">
        {productos.map(item => <div className="espacio"><img src={item.url} alt="" class="cartelera"/><br/><p>{item.juego}</p><button id={item.id} class="carrito_añadir precio">Añadir al carrito ${item.precio}</button></div>)}
        {/* {productos.map(item => <p id={item.id}>{" " + item.juego + " $" + item.precio}</p>)} */}
        </div>
    </>
  );
}