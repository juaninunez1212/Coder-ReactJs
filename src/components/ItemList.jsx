import React from "react"
import Item from "./Item";

export default function ItemList({productos}) {
  
  return (
    <>
      <div id="catalogo">
      {productos.map((producto) =>
      
      <Item key={producto.id} productos={producto} />
      
      )}
      </div>
    </>
  );
}