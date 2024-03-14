<<<<<<< HEAD
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
=======
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


>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a

    const handleSeleccionRespuesta = (e) => {
        setRespuestaSeleccionada(e.target.value);
    };

<<<<<<< HEAD
    const handleContinuar = () => {
        if (mesaSeleccionada && respuestaSeleccionada) {
            // Puedes poner aquí la lógica para continuar
            console.log("Continuar...");
=======

    const handleSeleccionMesa = (e) => {
        const mesaName = e.target.value;
        const mesaSeleccionada = mesas.find((mesa) => mesa.name === mesaName);
        setMesaSeleccionada(mesaSeleccionada);
    };

    const handleContinuar = () => {
        if (mesaSeleccionada && respuestaSeleccionada) {
            // Lógica para guardar la mesa seleccionada (puedes usar una acción para esto)
            // actions.guardarMesa(mesaSeleccionada);

>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
            // Redirigir a la siguiente página
            history("/Menu");
        } else {
            alert("Por favor, seleccione una mesa y responda si es mayor de 18 años.");
        }
    };

<<<<<<< HEAD
    return (
        <>

            <div className="container border mt-2 p-4 " style={{ maxWidth: "600px" }}>

=======

    return (
        <>
            <div className="container border mt-2 p-4" style={{ maxWidth: "600px" }}>
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
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

<<<<<<< HEAD
                {/* Row 2 */}
                <div className="row mb-3">
                    <div className="col text-center title-business2">
                        <h1 className="">Bienvenido a Le Petit Café</h1>
                        <h2 >Invitado</h2>
                    </div>
                </div>

                {/* Row 3 */}
=======
                <div className="row mb-3">
                    <div className="col text-center title-business2">
                        <h1 className="">Bienvenido a La Petit Café</h1>
                        <h2>Invitado</h2>
                    </div>
                </div>


>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
                <div className="row mb-3">
                    <div className="col">
                        <div className="select-tables">
                            <select
                                className="form-select"
<<<<<<< HEAD
                                value={mesaSeleccionada ? mesaSeleccionada.id : ''}
                                onChange={handleSeleccionMesa}
                            >
                                <option value="" disabled>Seleccione Mesa</option>
                                {mesas.map(mesa => (
                                    <option key={mesa.id} value={mesa.id}>
                                        {mesa.name}
=======
                                value={mesaSeleccionada ? mesaSeleccionada.name : ""}
                                onChange={handleSeleccionMesa}
                            >

                                <option value="" disabled>Seleccione Mesa</option>
                                {mesas.map((mesa) => (
                                    <option key={mesa.id} value={mesa.name}>
                                        {mesa.name} - {mesa.status}
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

<<<<<<< HEAD
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
=======
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
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
                            <label className="form-check-label" htmlFor="inlineCheckbox2">NO</label>
                        </div>
                    </div>
                </div>

<<<<<<< HEAD
                {/* Row 6 */}
                <div className="row mb-3">

=======
                <div className="row mb-3">
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
                    <div className="col-12 p-0">
                        <button className="custom-button-continue" onClick={handleContinuar}>
                            CONTINUAR
                        </button>
                    </div>
                </div>

<<<<<<< HEAD
                {/* Row 7 */}
                <div className="row  mb-3">
=======
                <div className="row mb-3">
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
                    <div className="col text-responsability">* Responsabilidad: si eres menor de 18 años, verás el menú adaptado a tu edad</div>
                </div>
            </div>
        </>
<<<<<<< HEAD


    )
};
=======
    );
};


>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
