import React, { useContext } from "react"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { CartContext } from '../Context/CartContextProvider';


export default function NavBar() {
  const {totalItems} = useContext(CartContext);
  return (
    <>
    <header><Link to={"/"} className="nav-link">Look to play!</Link></header>
    <nav className="navbar navbar-expand-lg " id="barraIndice">
                    <div className="container-fluid">
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
              
                      <div className="navbar-collapse justify-content-md-center collapse show" id="navbarsExample10">
                        <ul className="navbar-nav" id="barraIndice">
                            <li className="nav-item" id="barraIndice">
                            <Link to={"/Carrito"} className="nav-link active" aria-current="page">({totalItems})🛒</Link>
                            </li>
                            <li className="nav-item">
                              <Link to={"/"}className="nav-link active" aria-current="page">Inicio</Link>
                            </li>
                            <li className="nav-item">
                              <Link to={'/categories'}className="nav-link active" >Juegos</Link>
                            </li>
                            <li className="nav-item"><Link to={'/categories/Accion'} className="nav-link active" >Accion</Link></li>
                            <li className="nav-item"><Link to={'/categories/Aventura'} className="nav-link active" >Aventura</Link></li>
                            <li className="nav-item"><Link to={'/categories/Deportes'} className="nav-link active" >Deportes</Link></li>
                            <li className="nav-item"><Link to={'/categories/Carrera'} className="nav-link active" >Carrera</Link></li>
                           
                            
                          
                          </ul>
                      </div>
                    </div>
                  </nav>
    </>
  );
}
