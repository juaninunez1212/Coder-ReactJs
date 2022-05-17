import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { traerProductos } from "./stock";
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