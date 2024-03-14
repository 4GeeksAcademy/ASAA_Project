import React from "react";
import "../../styles/footer.css";
import IconLogo from "../../img/logo_quickpayqr_white.png";

export const Footer = () => (
  <footer className="container-fluid" style={{backgroundColor: "black"}}>

    <div className="row">
      <div className="col-12 col-md-2 d-flex align-items-center">
        <img
          src={IconLogo}
          alt="logo"
          className="img-fluid d-inline-block align-text-top me-2 footer-image-class logo-img-2"
		  width="100" 
		  height="100" 
		  style={{marginLeft:"100px"}}
        />
        <h1 className="title-footer" style={{ whiteSpace: 'nowrap' }}>Quick Pay QR</h1>
      </div>
    </div>

    <div className="row">
      <div className="col-12 col-md-4 text-white footer-column1 mb-5">
        <h2>Empresa</h2>
        <p className="p-column1">Sobre Nosotros</p>
        <p className="p-column1">Servicios</p>
        <p className="p-column1">Precios</p>
      </div>

      <div className="col-12 col-md-4 text-white footer-column2 mb-5">
        <h2>Ayuda</h2>
        <p>Atención al Cliente</p>
        <p>Términos y Condiciones</p>
        <p>Política de Privacidad</p>
      </div>

      <div className="col-12 col-md-4 pe-md-4">
  <label htmlFor="Suscribirse" className="form-label text-light font-weight-bold">
    Suscríbete a nuestra Newsletter
  </label>
  <div className="d-flex">
    <input
      type="text"
      id="Suscribirse"
      className="form-control rounded-pill mt-1 me-2 me-md-4" 
      placeholder="Escribe tu Email"
    />
    <button type="submit" className="btn custom-btn mt-2 me-md-4">
      Suscribir
    </button>
        </div>
      </div>
    </div>

    <div className="row custom-border-top">
      <div className="col-12 d-flex justify-content-between">
        <p className="m-2 ms-5 text-secondary">Copyright © 2024 Quick Pay QR</p>
        <p className="m-2 me-5 text-secondary">Diseñado por ASAA</p>
      </div>
    </div>

  </footer>
);


