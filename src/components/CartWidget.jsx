import React from "react"
import carrito from "./logocarrito.png"

export default function CartWidget() {
  return (
    <>
      <div><img src={carrito} alt="logo_carrito" className="foto_carrito"></img></div>
    </>
  );
}