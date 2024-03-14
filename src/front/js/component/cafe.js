<<<<<<< HEAD
import React, { useState } from "react";
import "../../styles/cafe.css";

import { useAppContext } from '../store/appContext';
=======
import React, { useState, useEffect, useContext } from "react";
import "../../styles/cafe.css";

import { Context, useAppContext } from '../store/appContext';
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a


import ImageCoffee from "../../img/img-business-demo/coffee.png";


export const Cafe = () => {
    const [showCoffeeOptions, setShowCoffeeOptions] = useState(false);
    const [selectedCafe, setSelectedCafe] = useState(null);
    const [selectedSweetener, setSelectedSweetener] = useState(null);
    const [selectedMilk, setSelectedMilk] = useState(null);
    const [quantity, setQuantity] = useState(1);
<<<<<<< HEAD

    const cafes = [
        { name: "Capuccino", price: 3.50, price_id:"price_1OtF6fCFFXL2ttgG3HeYDjeb" },
        { name: "Espresso", price: 2.50, price_id:"price_1OtF8OCFFXL2ttgGBFbQfa4z" },
        { name: "Latte", price: 4.00, price_id:"price_1OtF8cCFFXL2ttgGxwRuVJmK" },
        { name: "Americano", price: 3.00, price_id:"price_1OtF8zCFFXL2ttgGROBGnSy3" },
    ];
=======
    const [productos, setProductos] = useState([])
    const { store, actions } = useContext(Context)

    useEffect(() => {
        // Lógica para obtener las mesas desde el backend
        fetch(process.env.BACKEND_URL + '/api/productos',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(response => response.json())
            .then(response => {
                setProductos(response);
            })
            .catch(error => {
                console.log(error)
            });
    }, []);
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a

    const sweeteners = ["Sin Endulzantes", "Azúcar", "Azúcar Moreno", "Sacarina"];
    const milks = [

        { name: "Sin Leche", priceIncrement: 0 },
        { name: "Desnatada", priceIncrement: 0 },
        { name: "Entera", priceIncrement: 0 },
        { name: "Semi-Desnatada", priceIncrement: 0 },
<<<<<<< HEAD
        { name: "De Soja", priceIncrement: 0.40, price_id:"price_1OtFE6CFFXL2ttgGDaCkXZnn" },
        { name: "De Almendras", priceIncrement: 0.40, price_id:"price_1OtFEOCFFXL2ttgGtwvn04mR" }, 
=======
        { name: "De Soja", priceIncrement: 0.40 },
        { name: "De Almendras", priceIncrement: 0.40 },
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
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
<<<<<<< HEAD
=======
        console.log(milk)
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
<<<<<<< HEAD
    
=======

>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
    const resetState = () => {
        setShowCoffeeOptions(false);
        setSelectedCafe(null);
        setSelectedSweetener(null);
        setSelectedMilk(null);
        setQuantity(1);
    };

    const calculateTotalPrice = () => {
<<<<<<< HEAD
        const baseCafePrice = cafes.find((cafe) => cafe.name === selectedCafe)?.price || 0;
=======
        const baseCafePrice = productos.find((producto) => producto.name === selectedCafe)?.price || 0;
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
        const milkPriceIncrement = selectedMilk ? selectedMilk.priceIncrement : 0;
        const totalCafePrice = baseCafePrice + milkPriceIncrement;

        return totalCafePrice * quantity;
    };

<<<<<<< HEAD
=======


>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
    const { setUserSelections, userSelections } = useAppContext();

    const handleAddToOrder = () => {
        // Agregar al pedido
        const newSelection = {
            cafe: selectedCafe,
<<<<<<< HEAD
            price_id: cafes.find((cafe) => cafe.name === selectedCafe)?.price_id || null,
=======
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
            sweetener: selectedSweetener,
            milk: selectedMilk,
            quantity,
            totalPrice: calculateTotalPrice(),
        };

        // Obtén las selecciones actuales del estado global
        const currentSelections = userSelections || [];

        // Agrega la nueva selección
        const updatedSelections = [...currentSelections, newSelection];

        // Actualiza el estado global con las nuevas selecciones
        setUserSelections(updatedSelections);
<<<<<<< HEAD
=======
        actions.AñadirPedidoActualizado(updatedSelections)
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a

        resetState();
    };

<<<<<<< HEAD
      const handleDiscard = () => {
        resetState();
    };

=======
    const handleDiscard = () => {
        resetState();
    };

    const formatPrice = (price) => {
        if (Number.isInteger(price)) {
            return `${price} €`;
        } else if (typeof price === 'number') {
            return `${price.toFixed(2)} €`;
        } else {
            return 'Precio no disponible';
        }
    };



>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a

    return (

        <div>
            <h4 onClick={handleCafeSelection} style={{ cursor: "pointer", display: "flex", alignItems: "center", margin: 0, padding: 0 }}>
                <img src={ImageCoffee} alt="Café Icon" style={{ marginRight: "18px", width: "40px", height: "40px" }} />
                <span className="cafe-title" style={{ margin: 0, padding: 0, verticalAlign: "bottom" }}>CAFÉS</span>
            </h4>

            {showCoffeeOptions && (
                <>
                    <div style={{ marginLeft: "12px", marginBottom: "10px", marginTop: "10px" }}>
                        <label className="cafe-select">Selecciona tu Café:</label>
                    </div>
<<<<<<< HEAD
                    {cafes.map((cafe) => (
                        <div key={cafe.name} style={{ marginLeft: "12px", marginBottom: "10px", marginTop: "10px" }}>
=======
                    {productos.map((cafe) => (
                        <div key={cafe.id} style={{ marginLeft: "12px", marginBottom: "10px", marginTop: "10px" }}>
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
                            <label className="cafe-label" style={{ display: "flex", alignItems: "center", fontSize: "16px" }}>
                                <input
                                    type="radio"
                                    value={cafe.name}
                                    checked={selectedCafe === cafe.name}
                                    onChange={() => handleCoffeeOptionSelection(cafe.name)}
                                />
                                <span style={{ marginLeft: "10px" }}>{cafe.name}</span>
<<<<<<< HEAD
                                <span style={{ marginLeft: "auto" }}>
                                    Desde <strong>{Number.isInteger(cafe.price) ? cafe.price : cafe.price.toFixed(2)} €</strong>
                                </span>

=======

                                <span style={{ marginLeft: "auto" }}>
                                    <span style={{ marginLeft: "auto" }}>
                                        Desde <strong>{typeof cafe.price === 'number' ? (Number.isInteger(cafe.price) ? cafe.price : cafe.price.toFixed(2)) + ' €' : ''}</strong>
                                    </span>

                                </span>



>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
                            </label>
                        </div>
                    ))}

                </>
            )}

            {selectedCafe && selectedCafe !== "Cafe" && (
                <div style={{ overflowY: "auto", maxHeight: "150px" }}>
                    <label className="cafe-select" style={{ marginLeft: "12px", marginTop: "5px" }}>Selecciona Edulcorante:</label>
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "12px" }}>
                        <div style={{ display: "flex", flexDirection: "row", marginTop: "5px" }}>
                            <label className="cafe-label" style={{ fontSize: "16px", marginRight: "50px" }}>
                                <input
                                    type="radio"
                                    value="Azúcar"
                                    checked={selectedSweetener === "Azúcar"}
                                    onChange={() => handleSweetenerSelection("Azúcar")}
                                    style={{ marginRight: "10px" }}
                                />
                                Azúcar
                            </label>
                            <label className="cafe-label" style={{ fontSize: "16px" }}>
                                <input
                                    type="radio"
                                    value="Azúcar Moreno"
                                    checked={selectedSweetener === "Azúcar Moreno"}
                                    onChange={() => handleSweetenerSelection("Azúcar Moreno")}
                                    style={{ marginRight: "10px" }}
                                />
                                Azúcar Moreno
                            </label>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <label className="cafe-label" style={{ fontSize: "16px", marginRight: "32px" }}>
                                <input
                                    type="radio"
                                    value="Sacarina"
                                    checked={selectedSweetener === "Sacarina"}
                                    onChange={() => handleSweetenerSelection("Sacarina")}
                                    style={{ marginRight: "10px" }}
                                />
                                Sacarina
                            </label>
                            <label className="cafe-label" style={{ fontSize: "16px" }}>
                                <input
                                    type="radio"
                                    value="Sin Endulzante"
                                    checked={selectedSweetener === "Sin Endulzante"}
                                    onChange={() => handleSweetenerSelection("Sin Endulzante")}
                                    style={{ marginRight: "10px" }}
                                />
                                Sin Edulcorante
                            </label>
                        </div>
                    </div>
                </div>
            )}

            {selectedCafe && selectedCafe !== "Cafe" && selectedSweetener && (
<<<<<<< HEAD
                <div style={{ overflowY: "auto", maxHeight: "150px", display: "flex", flexDirection: "column", marginLeft: "12px",marginTop:"5px" }}>
=======
                <div style={{ overflowY: "auto", maxHeight: "150px", display: "flex", flexDirection: "column", marginLeft: "12px", marginTop: "5px" }}>
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
                    <label className="cafe-select">Selecciona Tipo de Leche:</label>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>

                        {/* Milk Left*/}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {milks.slice(0, 2).map((milk) => (
                                <label key={milk.name} className="cafe-label" style={{ fontSize: "14px" }}>
                                    <input
                                        type="radio"
                                        value={milk.name}
                                        checked={selectedMilk === milk}
                                        onChange={() => handleMilkSelection(milk)}
                                        style={{ marginRight: "10px" }}
                                    />
                                    {milk.name} {milk.priceIncrement !== 0 && `(+${milk.priceIncrement} €)`}
                                </label>
                            ))}
                        </div>

                        {/* Milk Center */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {milks.slice(2, 4).map((milk) => (
                                <label key={milk.name} className="cafe-label" style={{ fontSize: "14px" }}>
                                    <input
                                        type="radio"
                                        value={milk.name}
                                        checked={selectedMilk === milk}
                                        onChange={() => handleMilkSelection(milk)}
                                        style={{ marginRight: "10px" }}
                                    />
                                    {milk.name} {milk.priceIncrement !== 0 && `(+${milk.priceIncrement} €)`}
                                </label>
                            ))}
                        </div>

                        {/* Milk Right */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {milks.slice(4).map((milk) => (
                                <label key={milk.name} className="cafe-label" style={{ fontSize: "14px" }}>
                                    <input
                                        type="radio"
                                        value={milk.name}
                                        checked={selectedMilk === milk}
                                        onChange={() => handleMilkSelection(milk)}
                                        style={{ marginRight: "10px" }}
                                    />
                                    {milk.name} {milk.priceIncrement !== 0 && `(+${milk.priceIncrement.toFixed(2)}€)`}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {selectedCafe && selectedCafe !== "Cafe" && selectedSweetener && selectedMilk && (
                <div style={{ textAlign: "left", width: "100%" }}>
                    <p className="text-tuseleccion"><strong>Tu Selección: </strong>{quantity} {selectedCafe} con Leche {selectedMilk.name} y {selectedSweetener}.</p>

                    <div style={{ textAlign: "center", fontSize: "24px", margin: "10px 0", fontFamily: "Lato, sans-serif" }}>
                        <button onClick={handleDecrement} style={{ marginRight: "10px", background: "none", border: "none" }}>-</button>
                        <span style={{ color: "black", fontWeight: "bold" }}>{quantity}</span>
                        <button onClick={handleIncrement} style={{ marginLeft: "10px", background: "none", border: "none" }}>+</button>
                    </div>

                    <p className="totalprice-menu">Total Price: {calculateTotalPrice().toFixed(2)} €</p>

                    <div>
                        {/* Otras partes de tu componente */}
                        <div style={{ textAlign: "center" }}>
                            <button className="button-add-comand" onClick={handleAddToOrder} style={{ marginRight: "20px" }}>Añadir a tu Pedido y Seguir Comprando</button>
                            <button className="button-add-comand" onClick={handleDiscard}>Descartar</button>
                        </div>
                    </div>

                </div>
            )}

        </div>
    );
<<<<<<< HEAD
};


=======
};
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
