import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartDetail from "./components/CartDetail";
import CartContextProvider from "./Context/CartContextProvider";


export default function App() {
  return (
    <>
      <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/category" element={<ItemListContainer/>} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route exact path="/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/Carrito" element={<CartDetail/>}/>
        </Routes>
        
      </BrowserRouter>
      </CartContextProvider>
    </>
  );
}


