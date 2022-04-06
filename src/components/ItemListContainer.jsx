import React from "react"
import ItemCount from "./ItemCount";


export default function ItemListContainer() {
  

  function OnAdd (cantidad, stock){
    if (cantidad == 1) {
      alert("Se añadio al carrito " + cantidad + " unidad");
    } else {
      alert("Se añadieron al carrito " + cantidad + " unidadades");
    }
   
     cantidad = 1;
     return cantidad
  }
  
  return (
    <>
      <ItemCount stock={5} initial={1} OnAdd={OnAdd} />
      
    </>
  );
}
