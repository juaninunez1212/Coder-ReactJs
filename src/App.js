import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartDetail from "./components/CartDetail";
import CartContextProvider from "./Context/CartContextProvider";
import FormularioCompraContainer from "./components/FormularioCompraContainer";



export default function App() {
  return (
    <>
      <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/categories" element={<ItemListContainer/>} />
          <Route exact path="/categories/:categoryId" element={<ItemListContainer/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/Carrito" element={<CartDetail/>}/>
          <Route exact path="/OrderCheck" element={<FormularioCompraContainer/>}/>
         
        </Routes>
        
      </BrowserRouter>
      </CartContextProvider>
    </>
  );
}


