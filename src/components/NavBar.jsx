import React from "react"


export default function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Twelfth navbar example">
                    <div class="container-fluid">
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
              
                      <div className="navbar-collapse justify-content-md-center collapse show" id="navbarsExample10" style>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                              <a className="nav-link active sindeco" aria-current="page">Inicio</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link active sindeco" >Juegos</a>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle active"  id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Generos</a>
                              <ul className="dropdown-menu" aria-labelledby="dropdown10">
                                <li><a className="dropdown-item" >Accion</a></li>
                                <li><a className="dropdown-item" >Aventura</a></li>
                                <li><a className="dropdown-item" >Fantasía</a></li>
                                <li><a className="dropdown-item" >Suspenso</a></li>
                                <li><a className="dropdown-item" >Terror</a></li>
                                <li><a className="dropdown-item" >Carrera</a></li>
                              </ul>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle active" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Plataforma</a>
                              <ul className="dropdown-menu" aria-labelledby="dropdown10">
                                <li><a className="dropdown-item">PC</a></li>
                                <li><a className="dropdown-item">Play Station</a></li>
                                <li><a className="dropdown-item">Xbox</a></li>
                                <li><a className="dropdown-item">Nintendo</a></li>
                              </ul>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link active sindeco">Contacto</a>
                            </li>
                          </ul>
                      </div>
                    </div>
                  </nav>
    </>
  );
}
