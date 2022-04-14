import React from "react"
import { Link } from "react-router-dom";


export default function Item({productos}) {
  console.log(productos)

  return (
    <>
        
        <div className="espacio"><img src={productos.url} alt="" class="cartelera" /><br/><p>{productos.juego}</p><Link to={"/"+productos.id}id={productos.id} class="carrito_añadir precio">Ver detalle</Link></div>
        
        
    </>
  );
}