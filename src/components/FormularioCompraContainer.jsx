import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContextProvider';
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";


export default function FormularioCompraContainer() {
    const { total, totalItems, cart, removeFromCart, buyAll } = useContext(CartContext);
    const [name, setName] = useState("");
    const [dni, setDni] = useState("");
    const [numero, setNumero] = useState("");
    const [email, setEmail] = useState("");
    const [medioPago, setMedioPago] = useState("");
    const [error, setError] = useState(0)
    const date = new Date();
    
   
    
    
    const enviarOrden = (e) => {
      e.preventDefault();
      

      const orden = {
          comprador: { nombre: name, telefono: numero, email: email, DNI: dni, MedioDePago: medioPago },
          items: cart,
          total: total,
          fecha: date
      };
      const db = getFirestore();
      const ColeccionOrdenes = collection(db, "Ordenes");
      for (let i=0; i < cart.length; i++) {
        const error = doc(db, "productos", cart[i].id)
       updateDoc(error, {stock: (cart[i].stock - cart[i].count) })
      }
      addDoc(ColeccionOrdenes, orden).then(({id}) => alert("Su orden a sido un exito, el id es: " + id))
      
      
      

  }

  return (
    <>
    <div>
      <fieldset>
      <form onSubmit={enviarOrden}>
      <h2>Ingrese sus datos</h2>
      <div >
      <label>Nombre y Apellido:</label>
      <input id="forms_inputs" type={"text"} value={name} placeholder="Ej: Esteban Quito" onChange={(e) => {setName(e.currentTarget.value);}} required minLength={4} ></input>
      <span className="validity"></span>
      <br></br>
      </div>
      <label>DNI:</label>
      <input id="forms_inputs" type={"number"} value={dni} placeholder="Ej: 12345678" onChange={(e) => {setDni(e.currentTarget.value);}} required min={10000000} max={99999999}></input>
      <span className="validity"></span>
      <br></br>
      <label>Email:</label>
      <input id="forms_inputs" type={"email"} value={email} placeholder="Ej: example@example.com" onChange={(e) => {setEmail(e.currentTarget.value);}} required minLength={5}></input>
      <span className="validity"></span>
      <br></br>
      <label>Telefono:</label>
      <input id="forms_inputs" type={"tel"} value={numero} placeholder="Ej: 11-23232323" onChange={(e) => {setNumero(e.currentTarget.value);}} required pattern="11-[0-9]{8}" ></input>
      <span className="validity"></span>
      <br></br>
      <label>Medio de Pago</label>
      <select id="forms_inputs" type={"text"} value={medioPago} onChange={(e) => {setMedioPago(e.currentTarget.value);}} required minLength={5} maxLength={23}>
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
      <h5>Ticket:</h5>
      {cart.map((producto) => (
              <p>x{producto.count}   {producto.juego}  ${parseInt(producto.precio) * parseInt(producto.count)}   </p>
            ))}
   
      
    <button type="submit" >Confirmar Orden</button>
    </form>
    </fieldset>
                    
    </div> 
    </>
  );
}