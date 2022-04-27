import { React, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CartContext } from './CartContext';






export default function ItemDetail(producto) {
  const [count, setCount] = useState(1);
  

  const OnAdd = () => {
    // const [open, setOpen] = useState(false);

    const { addToCart } = useContext(CartContext);
    addToCart({ ...producto, count });
    setCount(1);

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
            <button onClick={() => {
                  if (count > 1) setCount(count - 1);
                }}
            > - </button>
            <input value={count}  disabled/>
            <button onClick={() => {
                  if (count < producto.stock) setCount(count + 1);
            }}> + </button>
            <br />
            <button onClick={() => OnAdd()}>Añadir al carrito</button>
            <Link to={"/Carrito"}><button>Finalizar compra</button></Link>
          </div>
          </div>
      </div>
    </div>
    </>
  );
}
