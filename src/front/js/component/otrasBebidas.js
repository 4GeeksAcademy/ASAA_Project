import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/pedidos.css";

export const Otras = () => {

    const [contador, setContador] = useState([]);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    const [otras, setOtras] = useState([
        { id: 1, nombre: 'Agua', precio: 1.00, imagen: 'https://elhorno.com/media/catalog/product/cache/728587fcd73f36684dd4a1c3c4b36cfb/m/o/mondariz.jpg' },
        { id: 2, nombre: 'Coca Cola', precio: 1.50, imagen: 'https://www.encopadebalon.com/3507-large_default/coca-cola-pack-24-botellas-20cl.jpg' },
        { id: 3, nombre: 'Batido', precio: 2.00, imagen: 'https://okdiario.com/img/recetas/2017/06/16/smoothie-de-fresa.jpg' },
        { id: 4, nombre: 'Nestea', precio: 1.20, imagen: 'https://pollossanjuan.es/wp-content/uploads/2018/04/Nestealata.jpg' },
    ]);


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
        <div className="otras">
            <button
                className="btn-warning"
                type="button"
                data-bs-toggle="dropdown">
                OTRAS BEBIDAS <i className="fa-solid fa-arrow-down-long" />
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
                <li className="m-2 text-secondary">Otras bebidas</li>
                {otras.map((producto) => (
                    <li key={producto.id} className="d-flex p-1">
                          <img
                                    src={producto.imagen}
                                    alt={`Imagen de ${producto.nombre}`}
                                    className="producto-imagen"
                                    onClick={() => mostrarImagen(producto.imagen)}
                                />
                        <span className="dropdown-item">
                            {producto.nombre} - {producto.precio.toFixed(2)}€
                        </span>
                        <div className="quantity">
                            <button onClick={() => incrementar(producto.id, producto.precio)}>+</button>
                            <span className="contador">{contador[producto.id] || 0}</span>
                            <button onClick={() => decrementar(producto.id, producto.precio)}>-</button>
                        </div>
                        <div className="precio-pedido">
                            <p>{(contador[producto.id] || 0) * producto.precio.toFixed(2)}€</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )

}