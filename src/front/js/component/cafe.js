import React, { useState } from "react";
import "../../styles/cafe.css";

import ImageCoffee from "../../img/img-business-demo/coffee.png";


export const Cafe = () => {
    const [showCoffeeOptions, setShowCoffeeOptions] = useState(false);
    const [selectedCafe, setSelectedCafe] = useState(null);
    const [selectedSweetener, setSelectedSweetener] = useState(null);
    const [selectedMilk, setSelectedMilk] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const cafes = [
        { name: "Capuccino", price: 3.5 },
        { name: "Espresso", price: 2.5 },
        { name: "Latte", price: 4.0 },
        { name: "Americano", price: 3.0 },
    ];

    const sweeteners = ["Sin Endulzantes", "Azúcar", "Azúcar Moreno", "Sacarina"];
    const milks = [

        { name: "Sin Leche", priceIncrement: 0 },
        { name: "Leche Desnatada", priceIncrement: 0 },
        { name: "Leche Entera", priceIncrement: 0 },
        { name: "Leche Semi-Desnatada", priceIncrement: 0 },
        { name: "Leche de Soja", priceIncrement: 0.4 },
        { name: "Leche de Almendras", priceIncrement: 0.4 },
        { name: "Leche de Avena", priceIncrement: 0.4 },
    ];

    const handleCafeSelection = () => {
        setShowCoffeeOptions(true);
    };

    const handleCoffeeOptionSelection = (cafe) => {
        setSelectedCafe(cafe);
    };

    const handleSweetenerSelection = (sweetener) => {
        setSelectedSweetener(sweetener);
    };

    const handleMilkSelection = (milk) => {
        setSelectedMilk(milk);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToOrder = () => {
        // Implement your logic for adding to order
        // This is where you might want to store the order data or perform further actions
        // For now, let's reset the state to its initial values
        resetState();
    };

    const handleDiscard = () => {
        resetState();
    };

    const resetState = () => {
        setShowCoffeeOptions(false);
        setSelectedCafe(null);
        setSelectedSweetener(null);
        setSelectedMilk(null);
        setQuantity(1);
    };

    const calculateTotalPrice = () => {
        const baseCafePrice = cafes.find((cafe) => cafe.name === selectedCafe)?.price || 0;
        const milkPriceIncrement = selectedMilk ? selectedMilk.priceIncrement : 0;
        const totalCafePrice = baseCafePrice + milkPriceIncrement;

        return totalCafePrice * quantity;
    };

    return (
        <div>
            <h4 onClick={handleCafeSelection} style={{ cursor: "pointer", display: "flex", alignItems: "center", margin: 0, padding: 0 }}>
                <img src={ImageCoffee} alt="Café Icon" style={{ marginRight: "18px", width: "40px", height: "40px", verticalAlign: "top" }} />
                <span style={{  margin: 0, padding: 0 }}>CAFÉS</span>
            </h4>

            {showCoffeeOptions && (
  <>
    {cafes.map((cafe) => (
      <div key={cafe.name} style={{ marginLeft: "12px", marginBottom: "10px", marginTop: "10px"}}>
        <label style={{ display: "flex", alignItems: "center", fontSize: "16px" }}>
          <input
            type="radio"
            value={cafe.name}
            checked={selectedCafe === cafe.name}
            onChange={() => handleCoffeeOptionSelection(cafe.name)}
          />
          <span style={{ marginLeft: "10px" }}>{cafe.name} - {cafe.price} €</span>
        </label>
      </div>
    ))}
  </>
)}


            {selectedCafe && selectedCafe !== "Cafe" && (
                <div style={{ overflowY: "auto", maxHeight: "150px" }}>
                    <label>Select sweetener:</label>
                    <div>
                        {sweeteners.map((sweetener) => (
                            <label key={sweetener}>
                                <input
                                    type="radio"
                                    value={sweetener}
                                    checked={selectedSweetener === sweetener}
                                    onChange={() => handleSweetenerSelection(sweetener)}
                                />
                                {sweetener}
                            </label>
                        ))}
                    </div>
                </div>
            )}

            {selectedCafe && selectedCafe !== "Cafe" && selectedSweetener && (
                <div style={{ overflowY: "auto", maxHeight: "150px" }}>
                    <label>Select milk:</label>
                    <div>
                        {milks.map((milk) => (
                            <label key={milk.name}>
                                <input
                                    type="radio"
                                    value={milk.name}
                                    checked={selectedMilk === milk}
                                    onChange={() => handleMilkSelection(milk)}
                                />
                                {milk.name} {milk.priceIncrement !== 0 && `(+${milk.priceIncrement} €)`}
                            </label>
                        ))}
                    </div>
                </div>
            )}

            {selectedCafe && selectedCafe !== "Cafe" && selectedSweetener && selectedMilk && (
                <div>
                    <p>Tu Selección: {quantity} {selectedCafe} con {selectedMilk.name} y {selectedSweetener}</p>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <p>Total Price: {calculateTotalPrice()} €</p>
                    <button onClick={handleAddToOrder}>Add to Order</button>
                    <button onClick={handleDiscard}>Descartar</button>
                </div>
            )}
        </div>
    );
};























/*
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/pedidos.css";

export const Cafe = () => {

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
*/