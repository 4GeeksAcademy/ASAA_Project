import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/seleccionarMesa.css";
import { Context } from "../store/appContext";

export const SeleccionarMesa = () => {
    const [mesaSeleccionada, setMesaSeleccionada] = useState("");
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState("");
    const [mesas, setMesas] = useState([]);
    const { store, actions } = useContext(Context)
    const history = useNavigate();

    useEffect(() => {
        // Lógica para obtener las mesas desde el backend
        fetch(process.env.BACKEND_URL + '/api/mesas',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(response => response.json())
            .then(response => {
                setMesas(response);
            })
            .catch(error => {
                alert('Error al enviar la mesa seleccionada:', error);
            });
    }, []);



    const handleSeleccionRespuesta = (e) => {
        setRespuestaSeleccionada(e.target.value);
    };


    const handleSeleccionMesa = (e) => {
        const mesaName = e.target.value;
        const mesaSeleccionada = mesas.find((mesa) => mesa.name === mesaName);
        setMesaSeleccionada(mesaSeleccionada);
    };

    const handleContinuar = () => {
        if (mesaSeleccionada && respuestaSeleccionada) {
            // Lógica para guardar la mesa seleccionada (puedes usar una acción para esto)
            // actions.guardarMesa(mesaSeleccionada);

            // Redirigir a la siguiente página
            history("/Menu");
        } else {
            alert("Por favor, seleccione una mesa y responda si es mayor de 18 años.");
        }
    };


    return (
        <>
            <div className="container border mt-2 p-4" style={{ maxWidth: "600px" }}>
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

                <div className="row mb-3">
                    <div className="col text-center title-business2">
                        <h1 className="">Bienvenido a La Petit Café</h1>
                        <h2>Invitado</h2>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col">
                        <div className="select-tables">
                            <select
                                className="form-select"
                                value={mesaSeleccionada ? mesaSeleccionada.name : ""}
                                onChange={handleSeleccionMesa}
                            >

                                <option value="" disabled>Seleccione Mesa</option>
                                {mesas.map((mesa) => (
                                    <option key={mesa.id} value={mesa.name}>
                                        {mesa.name} - {mesa.status}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <p className="mayor-edad" style={{ width: "100%" }}>
                        Antes de empezar, queremos saber si eres <span style={{ color: "#FF7058", fontWeight: "bold" }}>mayor de 18 años.*</span>
                    </p>
                </div>

                <div className="row mb-3">
                    <div className="col d-flex justify-content-center gap-5">
                        <div className="form-check form-check-inline custom-large-radio">
                            <input className="form-check-input" type="radio" id="inlineCheckbox1" name="radioGroup" value="SI" onChange={handleSeleccionRespuesta} />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">SI</label>
                        </div>
                        <div className="form-check form-check-inline custom-large-radio">
                            <input className="form-check-input" type="radio" id="inlineCheckbox2" name="radioGroup" value="NO" onChange={handleSeleccionRespuesta} />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">NO</label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-12 p-0">
                        <button className="custom-button-continue" onClick={handleContinuar}>
                            CONTINUAR
                        </button>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col text-responsability">* Responsabilidad: si eres menor de 18 años, verás el menú adaptado a tu edad</div>
                </div>
            </div>
        </>
    );
};


