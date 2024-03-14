import React, { useState } from 'react';

export const Modal = ({ producto, mostrar, cerrarModal, onAgregar, onQuitar }) => {
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

    // Verifica si el producto está definido antes de acceder a sus propiedades
    if (!producto) {
        return null; // O puedes renderizar un mensaje o contenido alternativo si lo prefieres
    }

    return (
        <div className={`modal ${mostrar ? 'mostrar' : ''}`}>
            <div className="modal-contenido">
                <button onClick={cerrarModal}>Cerrar</button>
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>Precio: {producto.precio}€</p>
                <div className="quantity">
                    <button onClick={() => incrementar(producto.id, producto.precio)}>+</button>
                    <span className="contador">{contador[producto.id] || 0}</span>
                    <button onClick={() => decrementar(producto.id, producto.precio)}>-</button>
                </div>
            </div>
        </div>
    );
};
