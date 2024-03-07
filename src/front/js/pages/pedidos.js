import React, { Component, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/pedidos.css";



export const Pedidos = () => {
    const [contador, setContador] = useState([]);


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

    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Croissant', precio: 2.50 },
        { id: 2, nombre: 'Bizcocho', precio: 3.00 },
        { id: 3, nombre: 'Tarta', precio: 4.50 },
        { id: 4, nombre: 'Donuts', precio: 1.75 },
    ]);

    const [cafes, setCafes] = useState([
        { id: 1, nombre: 'Cappuccino', precio: 3.50 },
        { id: 2, nombre: 'Americano', precio: 2.50 },
        { id: 3, nombre: 'Café Latte', precio: 4.00 },
        { id: 4, nombre: 'Espresso', precio: 2.00 },
    ]);

    const [tes, setTes] = useState([
        { id: 1, nombre: 'Té Negro', precio: 2.50 },
        { id: 2, nombre: 'Té Blanco', precio: 3.00 },
        { id: 3, nombre: 'Té Verde', precio: 2.80 },
        { id: 4, nombre: 'Té Amarillo', precio: 3.20 },
    ]);

    const [otras, setOtras] = useState([
        { id: 1, nombre: 'Agua', precio: 1.00 },
        { id: 2, nombre: 'Coca Cola', precio: 1.50 },
        { id: 3, nombre: 'Batidos', precio: 2.00 },
        { id: 4, nombre: 'Nestea', precio: 1.20 },
    ]);

    const mostrarImagen = (imagen) => {
        setImagenSeleccionada(imagen);
    };

    return (
        <div className="pagina-pedido">
            <div className="container-pedidos">
                <h5>Elige tus productos:</h5>
                <div className="dulces">
                    <button className="btn-warning" type="button" data-bs-toggle="dropdown">
                        DULCES <i className="fa-solid fa-arrow-down-long" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
                        <li className="m-2 text-secondary">Dulces</li>
                        {productos.map((producto, index) => (
                            <li key={index} className="d-flex p-1">
                                <span className="dropdown-item">
                                    {producto.nombre} - {producto.precio.toFixed(2)}€
                                </span>
                                <div className="quantity">
                                    <button onClick={() => incrementar(producto.id, producto.precio)}>+</button>
                                    <span className="contador">{contador[producto.id] || 0}</span>
                                    <button onClick={() => decrementar(producto.id, producto.precio)}>-</button>
                                </div>
                                <div className="precio-pedido">
                                    <p>{(contador[producto.id] || 0) * producto.precio.toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cafes">
                    <button
                        className="btn-warning"
                        type="button"
                        data-bs-toggle="dropdown">
                        CAFÉ <i className="fa-solid fa-arrow-down-long" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
                        <li className="m-2 text-secondary">Café</li>
                        {cafes.map((producto) => (
                            <li key={producto.id} className="d-flex p-1">
                                <span className="dropdown-item">
                                    {producto.nombre} - {producto.precio.toFixed(2)}€
                                </span>
                                <div className="quantity">
                                    <button onClick={() => incrementar(producto.id, producto.precio)}>+</button>
                                    <span className="contador">{contador[producto.id] || 0}</span>
                                    <button onClick={() => decrementar(producto.id, producto.precio)}>-</button>
                                </div>
                                <div className="precio-pedido">
                                    <p>{(contador[producto.id] || 0) * producto.precio.toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="te">
                    <button
                        className="btn-warning"
                        type="button"
                        data-bs-toggle="dropdown">
                        TÉ <i className="fa-solid fa-arrow-down-long" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
                        <li className="m-2 text-secondary">Té</li>
                        {tes.map((producto) => (
                            <li key={producto.id} className="d-flex p-1">
                                <span className="dropdown-item">
                                    {producto.nombre} - {producto.precio.toFixed(2)}€
                                </span>
                                <div className="quantity">
                                    <button onClick={() => incrementar(producto.id, producto.precio)}>+</button>
                                    <span className="contador">{contador[producto.id] || 0}</span>
                                    <button onClick={() => decrementar(producto.id, producto.precio)}>-</button>
                                </div>
                                <div className="precio-pedido">
                                    <p>{(contador[producto.id] || 0) * producto.precio.toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="otras">
                    <button
                        className="btn-warning"
                        type="button"
                        data-bs-toggle="dropdown">
                        OTRAS BEBIDAS <i className="fa-solid fa-arrow-down-long" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
                        <li className="m-2 text-secondary">Otras bebidas</li>
                        {productos.map((producto) => (
                            <li key={producto.id} className="d-flex p-1">
                                <span className="dropdown-item">
                                    {producto.nombre} - {producto.precio.toFixed(2)}€
                                </span>
                                <div className="quantity">
                                    <button onClick={() => incrementar(producto.id, producto.precio)}>+</button>
                                    <span className="contador">{contador[producto.id] || 0}</span>
                                    <button onClick={() => decrementar(producto.id, producto.precio)}>-</button>
                                </div>
                                <div className="precio-pedido">
                                    <p>{(contador[producto.id] || 0) * producto.precio.toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="button">
                    <Link to="/resumenPedido">
                        <button>Añadir al Pedido</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}