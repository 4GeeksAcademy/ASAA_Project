import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/pedidos.css";

export const Te = () => {

    const [contador, setContador] = useState([]);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    const { store, actions } = useContext(Context);

    const [tes, setTes] = useState([
        { id: 1, nombre: 'Té Negro', precio: 2.50, imagen: 'https://www.gastrolabweb.com/u/fotografias/m/2021/3/15/f850x638-10066_87555_5050.jpg' },
        { id: 2, nombre: 'Té Blanco', precio: 3.00, imagen: 'https://www.embassy.es/wp-content/uploads/2013/05/proepiedades-te-blanco.jpg' },
        { id: 3, nombre: 'Té Verde', precio: 2.80, imagen: 'https://media.admagazine.com/photos/618a6151be961b98e9f0991c/master/w_1600%2Cc_limit/85139.jpg' },
        { id: 4, nombre: 'Té Amarillo', precio: 3.20, imagen: 'https://tepedia.files.wordpress.com/2014/12/d76b952a42162e1762d285df7.jpg' },
    ]);


    const incrementar = (productoId, precio) => {
        console.log('hola')
        actions.IncrementarContadorPedido()
        setContador ((prevContadores) => {
            const nuevoContador = (prevContadores[productoId] || 0) + 1;
            return { ...prevContadores, [productoId]: nuevoContador };
        });
    };
  
    const decrementar = (productoId, precio) => {
      actions.DecrementarContadorPedido()
            setContador((prevContadores) => {
                const nuevoContador = prevContadores[productoId] - 1;
                return { ...prevContadores, [productoId]: nuevoContador };
            });
        };

    const mostrarImagen = (imagen) => {
        setImagenSeleccionada(imagen);
    };

    return (
        <div className="tes">
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