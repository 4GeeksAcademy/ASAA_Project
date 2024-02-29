import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/telefono.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons'; 
import { faPlay } from '@fortawesome/free-solid-svg-icons';




export const LandingPage = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center text-white">
            <div className="contenedor-1 col-lg-6 border d-flex flex-column"> {/* Mantenemos las clases de Bootstrap para el diseño en dispositivos grandes */}
                <div className="p-2">
                    <div className="contenedor1.1">
                        <span>SCAN-ORDER-ENJOY-PAY</span>
                    </div>
                    <div>
                        <h1>Quick Pay QR</h1>
                    </div>
                    <div>
                        <ul>
                            <li className="my-3">
							<FontAwesomeIcon className="me-1" icon={faX} style={{ color: "#ffffff" }} fade={{color: "#ffffff"}} />

                                Sumergete en una nueva era de comodidad. Dile adios a las esperas.
                            </li>
                            <li className="my-3">
							<FontAwesomeIcon className="me-1" icon={faX} style={{ color: "#ffffff" }}  fade={{color: "#ffffff"}}/>

                                 Rompe con la rutina de esperar. Pide y paga en segundos con tecnologia QR.
                            </li>
                            <li className="my-3">
							<FontAwesomeIcon className="me-1" icon={faX} style={{ color: "#ffffff" }}  fade={{color: "#ffffff"}}/>

                                 Tu tiempo es valioso y nosotros lo entendemos. Descubre una experiencia sin igual, donde cada segundo cuenta.
                            </li>
                        </ul>
                        <span>
						<FontAwesomeIcon className="me-1" icon={faPlay} style={{ color: "#ffffff" }} /> VIEW DEMO</span>
                    </div>
                </div>
            </div>
            <div className="contenedor12 col-lg-6 border p-2 d-flex justify-content-center align-items-center mb-3"> {/* Agregamos clases de Bootstrap para centrar verticalmente en dispositivos pequeños */}
                <div className="phone ">
                    {/* Contenido del teléfono */}
                    <div class="phone-back">
                        <div class="phone-left-side">
                            <div class="phone-antena"></div>
                            <div class="phone-button top"></div>
                            <div class="phone-button"></div>
                            <div class="phone-button bottom"></div>
                            <div class="phone-antena bottom"></div>
                        </div>
                        <div class="phone-bottom">
                            <div class="phone-antena"></div>
                            <div class="bottom-speaker">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="phone-screw">
                                <div></div>
                            </div>
                            <div class="phone-charger">
                            </div>
                            <div class="phone-screw right">
                                <div></div>
                            </div>
                            <div class="bottom-speaker right">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="phone-antena right"></div>
                        </div>
                    </div>
                    <div class="phone-screen"></div>
                    <div class="phone-display">
                        <div class="phone-notch">
                            <div class="phone-speaker"></div>
                        </div>
                        <div class="display-content  ">
							<h1 className="mt-5 p-5 ">No pierdas el tiempo,el cual no podras recuperar.
								Con nuestro servicio tendras tiempo y comodidad.
							</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
