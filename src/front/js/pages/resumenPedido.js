import React from "react";
import { Link } from "react-router-dom";
import "../../styles/resumeOrder.css";
import { useAppContext } from "../store/appContext";

export const ResumenPedido = () => {

    const { userSelections } = useAppContext();



    return (
        <div className="container mt-2 p-4" style={{ maxWidth: "600px" }}>
            <div className="row mb-3 bg-primary text-white">
                <div className="col d-flex align-items-center justify-content-center">
                    <Link to="/Menu" style={{ marginRight: "auto", color: "white" }}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </Link>
                    <span className="text-center">
                        <i className="bi bi-arrow-left-circle"></i>
                        <h5 className="d-inline-block ml-2 mb-0">Le Petit Café</h5>
                    </span>
                </div>
            </div>

            {/* Row 1 */}
            <div className="row mb-3 bg-secondary d-flex justify-content-center align-items-center tu-pedido">
                TU PEDIDO
            </div>


            <div className="row mb-3 bg-success text-white">
                {userSelections && userSelections.length > 0 ? (
                    userSelections.map((selection, index) => (
                        <div key={index}>
                            <p>
                                {selection.quantity} {selection.cafe} con Leche {selection.milk.name} y {selection.sweetener}.
                            </p>
                            <p>Total Price: {selection.totalPrice.toFixed(2)} €</p>
                            {/* ... (otros detalles o botones según sea necesario) */}
                        </div>
                    ))
                ) : (
                    <p>No hay selecciones en el pedido.</p>
                )}
            </div>










{/* Row 3 */}
<div className="row mb-3 bg-danger text-white">
    <Link to="/Menu" className="d-flex justify-content-between align-items-center w-100" style={{ color: "black", padding: "10px", textDecoration: "none" }}>
        <span>AÑADIR MÁS PRODUCTOS</span>
        <i className="fa-solid fa-chevron-right"></i>
    </Link>
</div>









{/* Row 4 */}
<div className="row mb-3 bg-warning text-dark d-flex flex-column">
    <span>Subtotal</span>
    <span>Propina</span>
    <span>TOTAL</span>
</div>








            {/* Row 5 */}
            <div className="row bg-warning text-dark p-2 mb-2">



                <div className="col-12 p-0">
                    <Link to="/resumenPedido" className="custom-button-confirm">
                        ENVIAR PEDIDO AL MOSTRADOR
                    </Link>
                </div>


            </div>

            {/* Row 6 */}
            <div className="row bg-warning text-dark p-2 mb-2">


                <div className="col-12 p-0">
                    <Link to="/resumenPedido" className="custom-button-confirm">
                        PROCEDER AL PAGO
                    </Link>
                </div>


            </div>
        </div>
    );
};
