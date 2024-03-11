import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/ventajas.css";

import IconClient from "../../img/icono_cliente.png";
import IconCorporate from "../../img/icono_empresa.png";
import IconImage from "../../img/Icon.png";

export const Ventajas = () => {
   

    return (
        <div id="ventajas" className="d-flex flex-wrap justify-content-center align-items-center text-white contenedor">
            <div className="contenedor3 text-white w-100">
                <div>
                    <h5 className="text-center titular main-title22">
                        Ventajas para usuarios y empresas
                    </h5>
                </div>

                <div className="row">
                    <div className="col-md-6 p-2 d-flex justify-content-center">
                        <img src={IconClient} alt="Icon" className="icon img-fluid" />
                    </div>
                    <div className="col-md-6 p-2 d-flex justify-content-center">
                        <img src={IconCorporate} alt="Icon" className="icon img-fluid" />
                    </div>
                </div>

                {/* Responsive layout for feature cards */}
                <div className="row">
                    <div className="col-md-6 p-2 d-flex justify-content-center">
                        <FeatureCard
                            title="Pago Rápido y Cómodo desde el Móvil"
                            description="Pide y abona transacciones de manera veloz y conveniente a través de tu propio dispositivo móvil."
                        />
                    </div>

                    <div className="col-md-6 p-2 d-flex justify-content-center">
                        <FeatureCard
                            title="Sin Necesidad de Página Web Propia"
                            description="Redirige a una plataforma de orden y pago, eliminando la necesidad de una web propia. La gestión de pedidos y cobros se realiza de manera integral desde su interfaz."
                        />
                    </div>

                    <div className="col-md-6 p-2 d-flex justify-content-center">
                        <FeatureCard
                            title="Variedad de Métodos de Pago desde un Enlace QR"
                            description="Proporciona acceso a diversos métodos de pago a partir de un simple enlace QR, ampliando las opciones para realizar transacciones de forma cómoda."
                        />
                    </div>

                    <div className="col-md-6 p-2 d-flex justify-content-center">
                        <FeatureCard
                            title="Sin Costes por Hardware"
                            description="Acceso a códigos QR desde la pantalla, reduciendo costos de hardware como datáfonos y permitiendo cobros sin TPV."
                        />
                    </div>

                    <div className="col-md-6 p-2 d-flex justify-content-center">
                        <FeatureCard
                            title="Seguridad Equiparable a Otras Formas de Pago Online"
                            description="Ofrece niveles de seguridad equivalentes a otras modalidades de pago en línea, garantizando la protección de la información y la confianza del usuario."
                        />
                    </div>

                    <div className="col-md-6 p-2 d-flex justify-content-center">
                        <FeatureCard
                            title="Mejora de Experiencia para Clientes y Trabajadores"
                            description="Los pedidos y pagos con QR, se procesan en cualquier momento, brindando libertad a los clientes.Aumenta la satisfacción y fidelidad al proporcionar una experiencia intuitiva y rápida, facilitando la repetición."
                        />
                    </div>

                    <div className="col-md-6 p-2 d-flex justify-content-center">
                        <FeatureCard
                            title="Pagos Sin Contacto, Agilizando el Proceso y Reduciendo Riesgos"
                            description="Facilita transacciones sin necesidad de contacto físico, optimizando la rapidez del proceso y minimizando los riesgos asociados a interacciones innecesarias, especialmente relevante en contextos post-pandémicos."
                        />
                    </div>

                    <div className="col-md-6 p-2 d-flex justify-content-center">
                        <FeatureCard
                            title="Alta Competitividad"
                            description="Adaptación eficiente al cambio de tendencia hacia el pago móvil. Asegura competitividad en un mercado donde el pago móvil se prevé dominante en los próximos 5 años."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable Feature Card component
const FeatureCard = ({ title, description }) => {
    return (
        <div className="d-flex flex-column">
            <img src={IconImage} alt="Icon" className="sub-icon img-fluid" />
            <h3 className="mb-0">{title}</h3>
            <p>{description}</p>
        </div>
    );
};
