import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "black", fontFamily: "Lato, sans-serif" }}>
      <style>
        {`
          .custom-hover:hover {
            color: #337ab7  !important;
          }
        `}
      </style>

      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <a href="#landingpage" className="nav-link custom-hover" style={{ color: "white", fontFamily: "Lato, sans-serif", fontWeight: 400, textDecoration: "none", transition: "color 0.3s" }}>
                Home
              </a>
            </li>
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <a href="#ventajas" className="nav-link custom-hover" style={{ color: "white", fontFamily: "Lato, sans-serif", fontWeight: 400, textDecoration: "none", transition: "color 0.3s" }}>
                Ventajas
              </a>
            </li>
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <a href="#ComoFunciona" className="nav-link custom-hover" style={{ color: "white", fontFamily: "Lato, sans-serif", fontWeight: 400, textDecoration: "none", transition: "color 0.3s" }}>
                Como Funciona
              </a>
            </li>
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <a href="#Afiliados" className="nav-link custom-hover" style={{ color: "white", fontFamily: "Lato, sans-serif", fontWeight: 400, textDecoration: "none", transition: "color 0.3s" }}>
                Afiliados
              </a>
            </li>
            <li className="nav-item" style={{ margin: "0 10px", marginRight: "100px" }}>
              <a href="#contactForm" className="nav-link custom-hover" style={{ color: "white", fontFamily: "Lato, sans-serif", fontWeight: 400, textDecoration: "none", transition: "color 0.3s" }}>
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


