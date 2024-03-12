import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/camarero_interfaz.css";



export const CamareroInterfaz = () => {

    const [showDetailsParis, setShowDetailsParis] = useState(false);
    const [showDetailsLyon, setShowDetailsLyon] = useState(false);
    const [showDetailsToulouse, setShowDetailsToulouse] = useState(false);
    const [showDetailsBordeaux, setShowDetailsBordeaux] = useState(false);

    const toggleDetailsParis = () => {
        setShowDetailsParis(!showDetailsParis);

        if (!showDetailsParis) {
            const pedidoParis = obtenerPedido("PARIS"); // Reemplaza con la función adecuada para obtener el pedido
            setPedidoParis(pedidoParis);
        }
    };

    const toggleDetailsLyon = () => {
        setShowDetailsLyon(!showDetailsLyon);

        if (!showDetailsLyon) {
            const pedidoLyon = obtenerPedido("LYON"); // Reemplaza con la función adecuada para obtener el pedido
            setPedidoLyon(pedidoLyon);
        }
    };

    const toggleDetailsToulouse = () => {
        setShowDetailsToulouse(!showDetailsToulouse);

        if (!showDetailsToulouse) {
            const pedidoToulouse = obtenerPedido("TOULOUSE"); // Reemplaza con la función adecuada para obtener el pedido
            setPedidoToulouse(pedidoToulouse);
        }
    };

    const toggleDetailsBordeaux = () => {
        setShowDetailsBordeaux(!showDetailsBordeaux);

        // Obtener y almacenar el pedido de la mesa BORDEAUX
        if (!showDetailsBordeaux) {
            const pedidoBordeaux = obtenerPedido("BORDEAUX"); // Reemplaza con la función adecuada para obtener el pedido
            setPedidoBordeaux(pedidoBordeaux);
        }
    };




    const [pedidoParis, setPedidoParis] = useState([]);
    const [pedidoLyon, setPedidoLyon] = useState([]);
    const [pedidoToulouse, setPedidoToulouse] = useState([]);
    const [pedidoBordeaux, setPedidoBordeaux] = useState([]);







    return (

        <div className="container border mt-2 p-4 " style={{ maxWidth: "500px" }}>
            <div className="row mb-5 text-white">
                <div className="col d-flex align-items-center justify-content-center">
                    <span className="staff-text" style={{ marginRight: "auto", color: "black" }}>
                        John Doe
                    </span>
                    <div className="text-center icons-staff">
                        <Link to="/EditProfile_Staff" style={{ color: "black", textDecoration: "none" }}><span className="me-2">Perfil</span></Link>
                        <i className="fas fa-user-edit me-3" style={{ color: "#d9534f" }}></i>
                        <Link to="/welcome" style={{ color: "black", textDecoration: "none" }}><span className="me-2">Salir</span></Link>
                        <i className="fas fa-sign-out-alt" style={{ color: "#d9534f" }}></i>
                    </div>
                </div>
            </div>



            <div className="row mb-4 main-mesa-estado">
                {/* Column 1 */}
                <div className="col-md-6 ">
                    MESA
                </div>

                {/* Column 2 */}
                <div className="col-md-6 ">
                    ESTADO
                </div>
            </div>


            {/* Línea separación */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <hr style={{ border: "1px solid gray", margin: "0" }} />
                </div>
            </div>



            {/* Row 3 */}
            <div className="row mb-3 text-black main-each-mesa">
                {/* Column 1 */}
                <div className="col-md-12 ">
                    <div className="mb-3 d-flex justify-content-between" onClick={toggleDetailsParis} style={{ cursor: "pointer", marginTop: "0" }}>
                        <div>
                            {showDetailsParis ? (
                                <i className="fas fa-chevron-down"></i>
                            ) : (
                                <i className="fas fa-chevron-right"></i>
                            )}
                            <span style={{ marginLeft: "15px" }}>Mesa PARIS</span>
                        </div>
                        <button className="btn btn-primary" style={{ cursor: "pointer", width: "200px" }}>Estado</button>
                    </div>
                    {showDetailsParis && (
                        <div className="ml-3">
                            More details for Mesa PARIS
                        </div>
                    )}
                </div>
            </div>


            {/* Línea separación */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <hr style={{ border: "1px solid gray", margin: "5px 0" }} />
                </div>
            </div>


            {/* Row 4 */}
            <div className="row mb-3 text-black main-each-mesa">
                {/* Column 1 */}
                <div className="col-md-12 ">
                    <div className="mb-3 d-flex justify-content-between" onClick={toggleDetailsLyon} style={{ cursor: "pointer", marginTop: "0" }}>
                        <div>
                            {showDetailsLyon ? (
                                <i className="fas fa-chevron-down"></i>
                            ) : (
                                <i className="fas fa-chevron-right"></i>
                            )}
                            <span style={{ marginLeft: "15px" }}>Mesa LYON</span>
                        </div>
                        <button className="btn btn-primary" style={{ cursor: "pointer", width: "200px" }}>Estado</button>
                    </div>
                    {showDetailsLyon && (
                        <div className="ml-3">
                            More details for Mesa LYON
                        </div>
                    )}
                </div>
            </div>

            {/* Línea separación */}
            <div className="row mb-3 ">
                <div className="col-md-12">
                    <hr style={{ border: "1px solid gray", margin: "5px 0" }} />
                </div>
            </div>


            {/* Row 5 */}
            <div className="row mb-3 text-black main-each-mesa">
                {/* Column 1 */}
                <div className="col-md-12">
                    <div className="mb-3 d-flex justify-content-between" onClick={toggleDetailsToulouse} style={{ cursor: "pointer", marginTop: "0" }}>
                        <div>
                            {showDetailsToulouse ? (
                                <i className="fas fa-chevron-down"></i>
                            ) : (
                                <i className="fas fa-chevron-right"></i>
                            )}
                            <span style={{ marginLeft: "15px" }}>Mesa TOULOUSE</span>
                        </div>
                        <button className="btn btn-primary" style={{ cursor: "pointer", width: "200px" }}>Estado</button>
                    </div>
                    {showDetailsToulouse && (
                        <div className="ml-3">
                            More details for Mesa TOULOUSE
                        </div>
                    )}
                </div>
            </div>

            {/* Línea separación */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <hr style={{ border: "1px solid gray", margin: "5px 0" }} />
                </div>
            </div>

            {/* Row 6 */}
            <div className="row mb-3 text-black position-relative main-each-mesa" style={{ margin: "0 -15px", paddingTop: "0" }}>
                {/* Column 1 */}
                <div className="col-md-12 ">
                    <div className="mb-3 d-flex justify-content-between" onClick={toggleDetailsBordeaux} style={{ cursor: "pointer", marginTop: "0" }}>
                        <div>
                            {showDetailsBordeaux ? (
                                <i className="fas fa-chevron-down"></i>
                            ) : (
                                <i className="fas fa-chevron-right"></i>
                            )}
                            <span style={{ marginLeft: "15px" }}>Mesa BORDEAUX</span>
                        </div>
                        <button className="btn btn-primary" style={{ cursor: "pointer", width: "200px" }}>Estado</button>
                    </div>
                    {showDetailsBordeaux && (
                        <div className="ml-3">
                            More details for Mesa BORDEAUX
                        </div>
                    )}
                </div>
            </div>

            {/* Línea separación */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <hr style={{ border: "1px solid gray", margin: "5px 0" }} />
                </div>
            </div>




        </div>
    );
};