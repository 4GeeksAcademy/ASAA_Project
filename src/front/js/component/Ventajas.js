import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/ventajas.css";

import IconClient from "../../img/icono_cliente.png";
import IconCorporate from "../../img/icono_empresa.png";
import IconImage from "../../img/Icon.png";

export const Ventajas = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center text-white contenedor">

            <div className="contenedor3 text-white w-100">

                <div>
                    <h5 className="text-center titular main-title">
                        Ventajas para usuarios y empresas
                    </h5>
                </div>

                <div className="row">
                    <div className="col-md-6 p-2 d-flex align-items-center">
                        <img src={IconClient} alt="Icon" className="icon" />
                    </div>
                    <div className="col-md-6 p-2 d-flex align-items-center">
                        <img src={IconCorporate} alt="Icon" className="icon2" />
                    </div>
                </div>


                <div className="row">
                    {/* Columna Izquierda */}
                    <div className="col-md-6 p-2 d-flex align-items-start">
                        <div className="pr-3">
                            <img src={IconImage} alt="Icon" className="sub-icon" />
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="mb-0">Pago Rápido y Cómodo desde el Móvil</h3>
                            <p>
                                Pide y abona transacciones de manera veloz y conveniente a través de tu propio dispositivo móvil.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 p-2 d-flex align-items-start">
                        <div className="pl-3">
                            <img src={IconImage} alt="Icon" className="sub-icon2" />
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="mb-0">Sin Necesidad de Página Web Propia</h3>
                            <p >
                                Redirige a una plataforma de orden y pago, eliminando la necesidad de una web propia. La gestión de pedidos y cobros se realiza de manera integral desde su interfaz.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 p-2 d-flex align-items-start">
                        <div className="pr-3">
                            <img src={IconImage} alt="Icon" className="sub-icon" />
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="mb-0">Variedad de Métodos de Pago desde un Enlace QR</h3>
                            <p>
                                Proporciona acceso a diversos métodos de pago a partir de un simple enlace QR, ampliando las opciones para realizar transacciones de forma cómoda.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 p-2 d-flex align-items-start">
                        <div className="pr-3">
                            <img src={IconImage} alt="Icon" className="sub-icon2" />
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="mb-0">Sin Costes por Hardware</h3>
                            <p>
                                Acceso a códigos QR desde la pantalla, reduciendo costos de hardware como datáfonos y permitiendo cobros sin TPV.
                            </p>
                        </div>
                    </div>



                    <div className="col-md-6 p-2 d-flex align-items-start">
                        <div className="pr-3">
                            <img src={IconImage} alt="Icon" className="sub-icon" />
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="mb-0">Seguridad Equiparable a Otras Formas de Pago Online</h3>
                            <p>
                                Ofrece niveles de seguridad equivalentes a otras modalidades de pago en línea, garantizando la protección de la información y la confianza del usuario.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 p-2 d-flex align-items-start">
                        <div className="pl-3">
                            <img src={IconImage} alt="Icon" className="sub-icon2" />
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="mb-0">Mejora de Experiencia para Clientes y Trabajadores</h3>
                            <p>
                                Los pedidos y pagos con QR, se procesan en cualquier momento, brindando libertad a los clientes.Aumenta la satisfacción y fidelidad al proporcionar una experiencia intuitiva y rápida, facilitando la repetición.
                            </p>
                        </div>
                    </div>

                    {/* Columna Derecha */}


                    <div className="col-md-6 p-2 d-flex align-items-start">
                        <div className="pl-3">
                            <img src={IconImage} alt="Icon" className="sub-icon" />
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="mb-0">Pagos Sin Contacto, Agilizando el Proceso y Reduciendo Riesgos</h3>
                            <p>
                                Facilita transacciones sin necesidad de contacto físico, optimizando la rapidez del proceso y minimizando los riesgos asociados a interacciones innecesarias, especialmente relevante en contextos post-pandémicos.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 p-2 d-flex align-items-start">
                        <div className="pl-3">
                            <img src={IconImage} alt="Icon" className="sub-icon2" />
                        </div>
                        <div className="d-flex flex-column">
                            <h3 className="mb-0">Alta Competitividad</h3>
                            <p>
                                Adaptación eficiente al cambio de tendencia hacia el pago móvil. Asegura competitividad en un mercado donde el pago móvil se prevé dominante en los próximos 5 años.
                            </p>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    );
};
