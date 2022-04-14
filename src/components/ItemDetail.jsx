import React from "react"
import ItemCount from "./ItemCount";


export default function ItemDetail({producto, OnAdd}) {
    
  return (
    <>
    <div>{producto.map(item => <div><img src={item.url} alt={item.juego} class="cartelera"/><div><h2>{item.juego}</h2><h3>${item.precio}</h3><ItemCount stock={5} initial={1} OnAdd={OnAdd}/></div></div> )}</div>
    </>
  );
}