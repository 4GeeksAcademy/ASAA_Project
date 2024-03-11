import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/pedidos.css";
import { Dulces } from "../component/dulces";
import { Cafe } from "../component/cafe";
import { Te } from "../component/te";
import { Otras } from "../component/otrasBebidas";



export const Pedidos = () => {
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    const { store, actions }  = useContext(Context);
  
    return (
      <div className="pagina-pedido">
        <div className="container-pedidos">
          <h5>Elige tus productos:</h5>
          <Dulces  />
          <Cafe />
          <Te />
          <Otras />
  
          <div className="button">
            <Link to="/resumenPedido">
              <button>({store.contadorPedido}) Añadir al Pedido</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };