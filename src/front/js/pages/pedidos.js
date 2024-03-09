import React, { Component, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/pedidos.css";
import { Dulces } from "../component/dulces";
import { Cafe } from "../component/cafe";
import { Te } from "../component/te";
import { Otras } from "../component/otrasBebidas";



export const Pedidos = () => {
    const [contador, setContador] = useState([]);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);


    const incrementar = (productoId, precio) => {
        setContador((prevContadores) => {
            const nuevoContador = (prevContadores[productoId] || 0) + 1;
            return { ...prevContadores, [productoId]: nuevoContador };
        });
    };

    const decrementar = (productoId, precio) => {
        if (contador[productoId] && contador[productoId] > 0) {
            setContador((prevContadores) => {
                const nuevoContador = prevContadores[productoId] - 1;
                return { ...prevContadores, [productoId]: nuevoContador };
            });
        }
    };

    const mostrarImagen = (imagen) => {
        setImagenSeleccionada(imagen);
    };

    return (
        <div className="pagina-pedido">
            <div className="container-pedidos">
                <h5>Elige tus productos:</h5>
                <Dulces />,
                <Cafe />,
                <Te />,
                <Otras />

                <div className="button">
                    <Link to="/resumenPedido">
                        <button>Añadir al Pedido</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}    