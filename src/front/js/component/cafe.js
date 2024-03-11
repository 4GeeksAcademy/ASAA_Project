import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/pedidos.css";

export const Cafe = () => {

    const [contador, setContador] = useState([]);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    const { store, actions } = useContext(Context);


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

    const [cafes, setCafes] = useState([
        { id: 1, nombre: 'Cappuccino', precio: 3.50, imagen: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino'},
        { id: 2, nombre: 'Americano', precio: 2.50, imagen: 'https://static.wixstatic.com/media/e9453e_95e93ca3c71d496d92bbfdcf2e38a047.jpg/v1/fill/w_480,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e9453e_95e93ca3c71d496d92bbfdcf2e38a047.jpg'},
        { id: 3, nombre: 'Café Latte', precio: 4.00, imagen: 'https://www.allrecipes.com/thmb/Wh0Qnynwdxok4oN0NZ1Lz-wl0A8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9428203-9d140a4ed1424824a7ddd358e6161473.jpg' },
        { id: 4, nombre: 'Espresso', precio: 2.00 , imagen: 'https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg'},
    ]);

    const mostrarImagen = (imagen) => {
        setImagenSeleccionada(imagen);
    };

    return (
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