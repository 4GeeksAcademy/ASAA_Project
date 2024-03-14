import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/resumeOrder.css";
import { useAppContext } from "../store/appContext";

export const ResumenPedido = () => {

    const { userSelections, setUserSelections } = useAppContext();

    const handleRemoveProduct = (index) => {
        const updatedSelections = [...userSelections];
        updatedSelections.splice(index, 1); // Elimina producto 
        setUserSelections(updatedSelections);
    };

    const calculateSubtotal = () => {
        if (!userSelections || userSelections.length === 0) {
            return 0; 
        }

        return userSelections.reduce((total, selection) => total + selection.totalPrice, 0);
    };

    const [tipAmount, setTipAmount] = useState(0);

    const handleTipChange = (event) => {
        const inputTipAmount = parseFloat(event.target.value);
        setTipAmount(isNaN(inputTipAmount) ? 0 : inputTipAmount);
    };

    const totalAmount = calculateSubtotal() + tipAmount;

    const [isOrderPlaced, setIsOrderPlaced] = useState(false); 
    
    const handlePlaceOrder = () => {
        // Enviar el pedido al mostrador
        setIsOrderPlaced(true);
    };


    return (
        <div className="container border mt-2 p-4" style={{ maxWidth: "600px" }}>
            <div className="row mb-3 text-white">
                <div className="col d-flex align-items-center justify-content-center">
                    <Link to="/Menu" style={{ marginRight: "auto", color: "black" }}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </Link>
                    <span className="text-center" style={{ color: "black" }}>
                        <h5 className="d-inline-block ml-2 mb-0">Le Petit Café</h5>
                    </span>
                </div>
            </div>


            {/* Row 1 */}
            <div className="row mb-3 d-flex justify-content-center align-items-center tu-pedido">
                TU PEDIDO
            </div>


            {/* Row 2 */}
            <div className="row mb-3 order-zone">
                {userSelections && userSelections.length > 0 ? (
                    userSelections.map((selection, index) => (
                        <div key={index} className="d-flex justify-content-between align-items-center">
                            <div className="price-text-total">
                                <p>
                                    {selection.quantity} {selection.cafe} con Leche {selection.milk.name} y {selection.sweetener}.
                                </p>
                                <p><strong>Total Price: {selection.totalPrice.toFixed(2)} €</strong></p>
                              
                            </div>
                            <button className="btn btn-danger delete-button-order" onClick={() => handleRemoveProduct(index)}>
                                X
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-no-selection">No hay selecciones en el pedido.</p>
                )}
            </div>


            {/* Row 3 */}
            <div className="row mb-3 text-white">
                <Link to="/Menu" className="d-flex justify-content-between align-items-center w-100" style={{ textDecoration: "none" }}>
                    <span className="add-more-products">AÑADIR MÁS PRODUCTOS <i className="fa-solid fa-chevron-right"></i></span>

                </Link>
            </div>


            {/* Row 4 */}
            <div className="row mb-3 text-dark d-flex flex-column total-section">
                <span className="d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <span>{calculateSubtotal().toFixed(2)} €</span>
                </span>
                <div className="d-flex align-items-center justify-content-between">
                    <span>Propina: </span>
                    <div className="d-flex align-items-center ml-auto">
                        <input
                            className="tip-input"
                            type="number"
                            min="0"
                            step="0.01"
                            value={tipAmount}
                            onChange={handleTipChange}
                            style={{ width: "60px", marginLeft: "0.5rem" }}
                        />
                        <span> €</span>
                    </div>
                </div>
                <span className="d-flex justify-content-between">
                    <strong>TOTAL: </strong>
                    <span>{totalAmount.toFixed(2)} €</span>
                </span>
            </div>


             {/* Row 5 */}
             <div className="row text-dark p-2 mb-2">
    <div className="col-12 p-0">
        <button
            className="custom-button-confirm"
            onClick={() => handlePlaceOrder()}
            disabled={isOrderPlaced || !userSelections || userSelections.length === 0}
        >
            ENVIAR PEDIDO AL MOSTRADOR
        </button>
    </div>

    {isOrderPlaced && (
        <div className="order-placed-message">
            <p>¡Gracias por tu pedido! En breves momentos te lo traeremos a tu mesa.</p>
        </div>
    )}
</div>



            {/* Row 6 */}
            <div className="row  text-dark p-2 mb-2">
                <div className="col-12 p-0">
                    <Link to="/resumenPedido" className="custom-button-confirm">
                        PROCEDER AL PAGO
                    </Link>
                </div>
            </div>

        </div>
    );
};