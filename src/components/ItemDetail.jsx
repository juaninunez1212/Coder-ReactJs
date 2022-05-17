import { React, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import  {CartContext} from '../Context/CartContextProvider';
import ItemCount from './ItemCount';






export default function ItemDetail(producto) {
  const {addToCart, setTotal, setTotalItems, total, totalItems} = useContext(CartContext);


  function onAdd(count)  {

    if (count > producto.stock) {
      alert("No hay suficiente stock disponible")
    } else {
    addToCart({...producto, count});
    setTotal(total + (count * producto.precio));
    setTotalItems(totalItems + count);
    }
  };

  
  
  return (
    <>
    <div>
      <div id="detalle">
        <img id ="foto" src={producto.url} alt={producto.juego} class="cartelera"/>
        <div id="titulo">
          <h2>{producto.juego}</h2>
          <h3>${producto.precio}</h3>
        </div>
        <div id="info">
          
          <p>{producto.descripcion}</p>
          
        </div> 
        <div id="itemcount">
            <ItemCount stock={producto.stock} onAdd={onAdd}></ItemCount>
            
        </div>
        
      </div>
    </div>
    </>
  );
}
