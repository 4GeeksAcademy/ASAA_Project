import React from "react";
import { Link } from "react-router-dom";
import "../../styles/welcome.css";
import ShopPhoto from "../../img/img-business-demo/coffeeshop.jpg";

export const Welcome = () => {
  return (


      <div className="container text-center border mt-2 p-4 " style={{ maxWidth: "600px" }}>

        <div className="row ">
          <div className="col">
            <h1 className="title-business">Le Petit Café</h1>
            <p className="sub-title-business">Depuis 1898</p>
          </div>
        </div>

        <div className="row">
          <div className="col p-0">
            <img
              src={ShopPhoto}
              alt="Your Alt Text"
              className="img-fluid"
              style={{borderRadius: "20px"}}
            />
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <h2 className="title-welcome">Bienvenido</h2>
            <p className="sub-title-welcome ">Es un placer tenerte aquí.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 p-0">
            <Link to="/SeleccionarMesa" className="custom-button-guest">
              Entra como invitado
            </Link>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6 p-0 d-flex justify-content-start">
            <Link to="#" className="custom-button custom-button-register">
              Regístrate
            </Link>
          </div>
          <div className="col-md-6 p-0 d-flex justify-content-end">
            <Link to="#" className="custom-button custom-button-login">
              Login
            </Link>
          </div>
        </div>

      </div>

  );
};