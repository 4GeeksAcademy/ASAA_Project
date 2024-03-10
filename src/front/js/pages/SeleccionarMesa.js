import React, { Component, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/seleccionarMesa.css";


export const SeleccionarMesa = () => {

     const [mesaSeleccionada, setMesaSeleccionada] = useState(null);
  
      const mesas = [
          { id: 1, name: 'Mesa París' },
          { id: 2, name: 'Mesa Lyon' },
          { id: 3, name: 'Mesa Toulouse' },
          { id: 4, name: 'Mesa Bordeaux' },
      ];
  
      const handleSeleccionMesa = (mesaId, Name) => {
          // Encontrar la mesa correspondiente en el array
          const mesaSeleccionada = mesas.find(mesa => mesa.id === mesaId);
          setMesaSeleccionada(mesaSeleccionada);
  
          console.log('Mesa seleccionada:', mesaSeleccionada);
      };

    return (


        <>


            <div className="container bg-success border mt-2 p-4 " style={{ maxWidth: "600px" }}>

                <div className="row bg-danger mb-3">
                    <div className="col d-flex align-items-center justify-content-center">
                        <Link to="/welcome" style={{ marginRight: "auto" }}>
                            <i className="fa-solid fa-chevron-left">Volver</i>
                        </Link>
                        <span className="text-center">
                            <i className="bi bi-arrow-left-circle"></i>
                            <h5 className="d-inline-block ml-2 mb-0">Le Petit Café</h5>
                        </span>
                    </div>
                </div>


                {/* Row 2 */}
                <div className="row bg-info mb-3">
                    <div className="col text-center">
                        <h1>Bienvenido a La Petit Café</h1>
                        <h2>Invitado</h2>
                    </div>
                </div>


                {/* Row 3 */}
                <div className="row bg-warning mb-3">
                    <div className="col">
                        
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
                    </div>
                </div>


                {/* Row 4 */}
                <div className="row bg-info mb-3">
                    <div className="col">
                    <h3 className="h3-mesa">Antes de empezar, queremos saber si eres <span>mayor de 18 años.</span></h3>
                    
                    </div>
                </div>


                {/* Row 5 */}
                <div className="row  bg-warning mb-3">
                    <div className="col">
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
                </div>


                {/* Row 6 */}
                <div className="row bg-secondary mb-3">
                    <div className="col">
                    <Link to="/pedidos">
                            <button>Continuar</button>
                        </Link>
                        </div>
                </div>


                {/* Row 7 */}
                <div className="row bg-primary mb-3">
                    <div className="col">* Responsabilidad: si eres menor de 18 años, verás el menú adaptado a tu edad</div>
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