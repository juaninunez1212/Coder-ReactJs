import { React, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';






export default function ItemDetail(producto) {
  const { addToCart } = useContext(CartContext);

  

  function onAdd(count)  {
    // const [open, setOpen] = useState(false);

   
    addToCart({...producto, count});
    alert("AGREGADO")

  
  
    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
  
    // return (
    //   <div>
    //     <button
    //       className='flex ml-5 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'
    //       onClick={handleClickOpen}
    //     >
    //       Add to cart
    //     </button>
    //     <Dialog
    //       open={open}
    //       onClose={handleClose}
    //       aria-labelledby='alert-dialog-title'
    //       aria-describedby='alert-dialog-description'
    //     >
    //       <DialogTitle id='alert-dialog-title'>Add to cart</DialogTitle>
    //       <DialogContent>
    //         <DialogContentText id='alert-dialog-description'>
    //           Are you sure you want to add this item to your cart?
    //         </DialogContentText>
    //       </DialogContent>
    //       <DialogActions>
    //         <Button onClick={handleClose}>Disagree</Button>
    //         <Button
    //           onClick={() => {
    //             handleClose();
    //             addToCart({ ...producto, count });
    //             setCount(1);
    //           }}
    //           autoFocus
    //         >
    //           Agree
    //         </Button>
    //       </DialogActions>
    //     </Dialog>
    //   </div>
    // );
  };

  
  
  return (
    <>
    <div>
      <div>
        <img src={producto.url} alt={producto.juego} class="cartelera"/>
        <div>
          <h2>{producto.juego}</h2>
          <h3>${producto.precio}</h3>
          <p> bla bla bla bla bla bla</p>
          <div className="itemcount">
            <ItemCount stock={producto.stock} onAdd={onAdd}></ItemCount>
            
          </div>
          </div>
      </div>
    </div>
    </>
  );
}
