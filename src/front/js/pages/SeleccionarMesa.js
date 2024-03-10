import React, { Component, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/seleccionarMesa.css";


export const SeleccionarMesa = () => {

    const [mesaSeleccionada, setMesaSeleccionada] = useState('');

    const mesas = [
        { id: 1, name: 'Mesa PARIS' },
        { id: 2, name: 'Mesa LYON' },
        { id: 3, name: 'Mesa TOULOUSE' },
        { id: 4, name: 'Mesa BORDEAUX' },
    ];

    const handleSeleccionMesa = (e) => {
        const mesaId = parseInt(e.target.value, 10);
        const mesaSeleccionada = mesas.find(mesa => mesa.id === mesaId);
        setMesaSeleccionada(mesaSeleccionada ? mesaSeleccionada.name : '');
    };

    return (


        <>

            <div className="container border mt-2 p-4 " style={{ maxWidth: "600px" }}>

                <div className="row mb-3">
                    <div className="col d-flex align-items-center justify-content-center">
                        <Link to="/welcome" style={{ marginRight: "auto", color:"black" }}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </Link>
                        <span className="text-center">
                            <i className="bi bi-arrow-left-circle"></i>
                            <h5 className="d-inline-block ml-2 mb-0">Le Petit Café</h5>
                        </span>
                    </div>
                </div>


                {/* Row 2 */}
                <div className="row mb-3">
                    <div className="col text-center title-business2">
                        <h1 className="">Bienvenido a La Petit Café</h1>
                        <h2 >Invitado</h2>
                    </div>
                </div>


                {/* Row 3 */}
                <div className="row mb-3">
                    <div className="col">
                        <div className="select-tables">
                            <select
                                className="form-select"
                                value={mesaSeleccionada ? mesaSeleccionada.id : ''}
                                onChange={handleSeleccionMesa}
                            >
                                <option value="" disabled>Seleccione Mesa</option>
                                {mesas.map(mesa => (
                                    <option key={mesa.id} value={mesa.id}>
                                        {mesa.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>


                {/* Row 4 */}
                <div className="row mb-3">

                    <p className="mayor-edad" style={{ width: "100%" }}>
                        Antes de empezar, queremos saber si eres <span style={{ color: "#FF7058", fontWeight: "bold" }}>mayor de 18 años.*</span>
                    </p>

                </div>



                {/* Row 5 */}
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center gap-5">
                        <div className="form-check form-check-inline custom-large-radio">
                            <input className="form-check-input" type="radio" id="inlineCheckbox1" name="radioGroup" value="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">SI</label>
                        </div>
                        <div className="form-check form-check-inline custom-large-radio">
                            <input className="form-check-input" type="radio" id="inlineCheckbox2" name="radioGroup" value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">NO</label>
                        </div>
                    </div>
                </div>


                {/* Row 6 */}
                <div className="row mb-3">

                    <div className="col-12 p-0">
                        <Link to="/welcome" className="custom-button-continue">
                            CONTINUAR
                        </Link>
                    </div>
                </div>


                {/* Row 7 */}
                <div className="row  mb-3">
                    <div className="col text-responsability">* Responsabilidad: si eres menor de 18 años, verás el menú adaptado a tu edad</div>
                </div>
            </div>
        </>














        /*
            <div className="pagina-mesa">
                <div className="container-mesa">
                    <h1>Bienvenido a La Petit Café</h1>
                    <h2>Invitado</h2>
                    <div className="dropdown">
                        <button
                            className="btn btn-warning dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ color: '#ffffff' }}
                        >
                            {mesaSeleccionada ? mesaSeleccionada.name : 'Seleccione Mesa'}
                        </button>

                        <div className="dropdown-menu">
                            {mesas.map(mesa => (
                                <a
                                    key={mesa.id}
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleSeleccionMesa(mesa.id, mesa.name)}
                                >
                                    <i className={`fa-solid fa-${mesa.id}`} style={{ color: '#ff8040' }}></i> {mesa.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="dropdown2">
                        <h3 className="h3-mesa">Antes de empezar, queremos saber si eres <span>mayor de 18 años.</span></h3>
                        <div className="radio-button">
                            <input type="radio" name="example-radio" value="option1" />
                            <span className="radio"></span>
                            Si
                        </div>

                        <div className="radio-button">
                            <input type="radio" name="example-radio" value="option2" />
                            <span className="radio"></span>
                            No
                        </div>
                    </div>
                    <div className="button">
                        <Link to="/pedidos">
                            <button>Continuar</button>
                        </Link>
                        <p>* Responsabilidad: si eres menor de 18 años, verás el menú adaptado a tu edad</p>
                    </div>
                </div>
            </div>

            */

    )
};