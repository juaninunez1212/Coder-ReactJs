import React from "react"
import { Link } from "react-router-dom";


export default function Item({productos}) {
  console.log(productos)

  return (
    <>
        
        <div className="espacio"><Link to={"/"+productos.id}id={productos.id} ><img src={productos.url} alt="" class="cartelera" /></Link><br/><p>{productos.juego}</p><Link to={"/"+productos.id}id={productos.id} ><button class="carrito_añadir precio">Ver detalle</button></Link></div>
        
        
    </>
  );
}