import React, { useContext } from "react"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { CartContext } from '../Context/CartContextProvider';


export default function NavBar() {
  const {totalItems} = useContext(CartContext);
  return (
    <>
    <header>Look to play!</header>
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
                              <Link to={'/category'}className="nav-link active" >Juegos</Link>
                            </li>
                            <li className="nav-item"><Link to={'/category/Accion'} className="nav-link active" >Accion</Link></li>
                            <li className="nav-item"><Link to={'/category/Aventura'} className="nav-link active" >Aventura</Link></li>
                            <li className="nav-item"><Link to={'/category/Deportes'} className="nav-link active" >Deportes</Link></li>
                            <li className="nav-item"><Link to={'/category/Suspenso'} className="nav-link active" >Suspenso</Link></li>
                            <li className="nav-item"><Link to={'/category/Terror'} className="nav-link active" >Terror</Link></li>
                            <li className="nav-item"><Link to={'/category/Carrera'} className="nav-link active" >Carrera</Link></li>
                           
                            
                            <li className="nav-item">
                              <Link to={"/"} className="nav-link active">Contacto</Link>
                            </li>
                          </ul>
                      </div>
                    </div>
                  </nav>
    </>
  );
}
