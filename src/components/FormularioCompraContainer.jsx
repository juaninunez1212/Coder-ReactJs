import React, { useState, useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContextProvider';
import { addDoc, collection, getFirestore } from "firebase/firestore";


export default function FormularioCompraContainer() {
    const { total, totalItems, cart, removeFromCart, buyAll } = useContext(CartContext);
    const [name, setName] = useState("");
    const [dni, setDni] = useState("");
    const [numero, setNumero] = useState("");
    const [email, setEmail] = useState("");
    const [medioPago, setMedioPago] = useState("");
    
    const enviarOrden = () => {
      const orden = {
          comprador: { nombre: name, telefono: numero, email: email, DNI: dni, MedioDePago: medioPago },
          items: totalItems,
          total: total
      };
      const db = getFirestore();
      const ColeccionOrdenes = collection(db, "Ordenes");
      addDoc(ColeccionOrdenes, orden).then(({id}) => console.log(id))
  }

  return (
    <>
    <div>
      <h2>Ingrese sus datos</h2>
      <label>Nombre y Apellido:</label>
      <input type={"text"} value={name} placeholder="Ej: Esteban Quito" onChange={(e) => {setName(e.currentTarget.value);}} required minLength={4} ></input>
      <span className="validity"></span>
      <br></br>
      <label>DNI:</label>
      <input type={"number"} value={dni} placeholder="Ej: 12345678" onChange={(e) => {setDni(e.currentTarget.value);}} required min={10000000} max={99999999}></input>
      <span className="validity"></span>
      <br></br>
      <label>Email:</label>
      <input type={"email"} value={email} placeholder="Ej: example@example.com" onChange={(e) => {setEmail(e.currentTarget.value);}} required minLength={5}></input>
      <span className="validity"></span>
      <br></br>
      <label>Telefono:</label>
      <input type={"tel"} value={numero} placeholder="1123232323" onChange={(e) => {setNumero(e.currentTarget.value);}} required minLength={10} maxLength={10} ></input>
      <span className="validity"></span>
      <br></br>
      <label>Medio de Pago</label>
      <select type={"text"} value={medioPago} onChange={(e) => {setMedioPago(e.currentTarget.value);}} required minLength={5} maxLength={23}>
        <option></option>
        <option value="Tarjeta de Credito"> Tarjeta de credito</option>
        <option value="Tarjeta de Debito"> Tarjeta de debito</option>
        <option value="Efectivo"> Efectivo</option>
        <option value="Transferencia Bancaria"> Transferencia Bancaria</option>
        <option value="RapiPago/PagoFacil"> RapiPago/PagoFacil</option>
      </select>
      <span className="validity"></span>
      <br></br>
      <h4>Monto a abonar: ${total}</h4>
      <h6>Ticket:</h6>
      {cart.length > 0 &&
            cart.map((producto) => (
              <p>x{producto.count}   {producto.juego}  ${parseInt(producto.precio) * parseInt(producto.count)}   </p>
            ))}
    </div>
      
    <button onClick={enviarOrden}>Confirmar Compra</button> 
    </>
  );
}