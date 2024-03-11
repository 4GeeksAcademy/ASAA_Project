import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Modal } from "../component/modal";

import "../../styles/pedidos.css";

export const Dulces = () => {
    const [productos, setProductos] = useState([
      { id: 1, nombre: 'Croissant', precio: 2.50, imagen: 'https://www.bridor.com/medias/sys_master/images/images/h2e/h08/8897595375646/Croissant-Courb-EDT-SourceHD-1200Wx1200H.png' },
      { id: 2, nombre: 'Bizcocho', precio: 3.00, imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Bizcocho-San_Isidro_%28Madrid%29.JPG' },
      { id: 3, nombre: 'Tarta', precio: 4.50, imagen: 'https://estaticos-cdn.prensaiberica.es/clip/ac95edae-0e4a-4f00-a68e-ac72fc5b8786_16-9-discover-aspect-ratio_default_0.jpg' },
      { id: 4, nombre: 'Donuts', precio: 1.75, imagen: 'https://comercialalias.com/1050/donuts-azucar.jpg' },
    ]);
  
    const [carrito, setCarrito] = useState([]);
  
    const incrementar = (productoId, precio) => {
      setCarrito((prevCarrito) => {
        const nuevoCarrito = [...prevCarrito];
        const index = nuevoCarrito.findIndex((item) => item.id === productoId);
  
        if (index !== -1) {
          nuevoCarrito[index].cantidad += 1;
        } else {
          nuevoCarrito.push({ id: productoId, cantidad: 1, precio });
        }
  
        return nuevoCarrito;
      });
    };
  
    const decrementar = (productoId, precio) => {
      setCarrito((prevCarrito) => {
        const nuevoCarrito = [...prevCarrito];
        const index = nuevoCarrito.findIndex((item) => item.id === productoId);
  
        if (index !== -1) {
          nuevoCarrito[index].cantidad -= 1;
  
          if (nuevoCarrito[index].cantidad === 0) {
            nuevoCarrito.splice(index, 1);
          }
        }
  
        return nuevoCarrito;
      });
    };
  
    const mostrarImagen = (imagen) => {
      // Lógica para mostrar la imagen
    };
  
    return (
      <div className="dulces">
        <button className="btn-warning" type="button" data-bs-toggle="dropdown">
          DULCES <i className="fa-solid fa-arrow-down-long" />
        </button>
        <ul className="dropdown-menu dropdown-menu-lg-end">
          <li className="m-2 text-secondary">Dulces</li>
          {productos.map((producto) => (
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
                <span className="contador">{carrito.find((item) => item.id === producto.id)?.cantidad || 0}</span>
                <button onClick={() => decrementar(producto.id, producto.precio)}>-</button>
              </div>
            </li>
          ))}
        </ul>
        
        </div>
      
    );
  };