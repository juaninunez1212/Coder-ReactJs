import React from "react"
import ItemCount from "./ItemCount";


export default function ItemDetail({producto}) {
    console.log(producto)
  return (
    <>
    <div>{producto.map(item => <div><img src={item.url} alt={item.juego} /><div><h2>{item.juego}</h2><h3>${item.precio}</h3><ItemCount /></div></div> )}</div>
    </>
  );
}