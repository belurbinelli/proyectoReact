import React from 'react'
import "./navbar.css"


const navbar = () => {
  return (
    <nav className="navbar fondo_navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Koala Sin TACC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav div4">
      <div className="cajaImagen">
      <img className="carrito" src="https://i.pinimg.com/736x/6e/90/9e/6e909ea80005ab34d61ee144686c40ee.jpg" alt="" />
  </div>
        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        <a className="nav-link" href="#">Tienda</a>
        <a className="nav-link" href="#">Contacto</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default navbar