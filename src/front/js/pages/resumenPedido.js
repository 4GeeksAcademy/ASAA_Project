import React, { Component, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/resumenPedido.css";

export const ResumenPedido = () => {

    const [contador, setContador] = useState(1);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        // Evitar que el contador sea menor que 1
        if (contador > 1) {
            setContador(contador - 1);
        }
    };
    return (
        <div className="container-resumen">
            <div className="card cart">
                <label className="title">Tu Pedido:</label>
                <div className="products">
                    <div className="product">
                        <svg
                            fill="none"
                            viewBox="0 0 60 60"
                            height="60"
                            width="60"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* ... (código del SVG) ... */}
                        </svg>
                        <div>
                            <p>Croissant</p>
                        </div>
                        <div className="quantity">
                            <button onClick={incrementar}>+</button>
                            <span className="contador">{contador}</span>
                            <button onClick={decrementar}>-</button>
                        </div>
                        <label className="price small">23.99</label>
                    </div>
                    <div className="product">
                        <svg
                            fill="none"
                            viewBox="0 0 60 60"
                            height="60"
                            width="60"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* ... (código del SVG) ... */}
                        </svg>
                        <div>
                            <p>Cappuccino</p>
                        </div>
                        <div className="quantity">
                            <button onClick={incrementar}>+</button>
                            <span className="contador">{contador}</span>
                            <button onClick={decrementar}>-</button>
                        </div>
                        <label className="price small">23.99</label>
                    </div>
                </div>
            </div>

            <div className="card añadir">
                <label className="title">Añadir más productos</label>
                <form className="form">
                    <Link to="/pedidos">
                        <button>Añadir</button>
                    </Link>
                </form>
            </div>

            <div className="card checkout">
                <label className="title">Resumen</label>
                <div className="details">
                    <span>Subtotal:</span>
                    <span>47.99</span>
                    <span>Propina:</span>
                    <span>47.99</span>
                </div>
                <div className="checkout--footer">
                    <label className="price">
                        <sup></sup>57.99
                    </label>
                    <button className="checkout-btn">PROCEDER AL PAGO</button>
                </div>
            </div>
        </div>
    );
};
