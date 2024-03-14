import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/seleccionarMesa.css";



export const SeleccionarMesa = () => {
    const [mesaSeleccionada, setMesaSeleccionada] = useState('');
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState('');
    const history = useNavigate();

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

    const handleSeleccionRespuesta = (e) => {
        setRespuestaSeleccionada(e.target.value);
    };

    const handleContinuar = () => {
        if (mesaSeleccionada && respuestaSeleccionada) {
            // Puedes poner aquí la lógica para continuar
            console.log("Continuar...");
            // Redirigir a la siguiente página
            history("/Menu");
        } else {
            alert("Por favor, seleccione una mesa y responda si es mayor de 18 años.");
        }
    };

    return (
        <>

            <div className="container border mt-2 p-4 " style={{ maxWidth: "600px" }}>

                <div className="row mb-3">
                    <div className="col d-flex align-items-center justify-content-center">
                        <Link to="/welcome" style={{ marginRight: "auto", color: "black" }}>
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
                            <input className="form-check-input" type="radio" id="inlineCheckbox1" name="radioGroup" value="SI"
                                onChange={handleSeleccionRespuesta} />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">SI</label>
                        </div>
                        <div className="form-check form-check-inline custom-large-radio">
                            <input className="form-check-input" type="radio" id="inlineCheckbox2" name="radioGroup" value="NO"
                                onChange={handleSeleccionRespuesta} />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">NO</label>
                        </div>
                    </div>
                </div>

                {/* Row 6 */}
                <div className="row mb-3">

                    <div className="col-12 p-0">
                        <button className="custom-button-continue" onClick={handleContinuar}>
                            CONTINUAR
                        </button>
                    </div>
                </div>

                {/* Row 7 */}
                <div className="row  mb-3">
                    <div className="col text-responsability">* Responsabilidad: si eres menor de 18 años, verás el menú adaptado a tu edad</div>
                </div>
            </div>
        </>


    )
};