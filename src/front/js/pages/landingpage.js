import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import IconImage from "../../img/Icon.png";
import IconPlayDemo from "../../img/IconPlayDemo.png";
import QRBackground from "../../img/qr_image.png";
import QRScreen from "../../img/qr_image_recta_white.png";
import { ComoFunciona } from "../component/ComoFunciona";
import { Ventajas } from "../component/Ventajas";


export const LandingPage = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center text-white contenedor">
            <div className="background1 w-100 d-flex flex-lg-row flex-column">
                <div className="contenedor1 col-lg-6">
                    <div className="p-2">
                        <div className="contenedor11">
                            <span className="text-span">SCAN-ORDER-ENJOY-PAY</span>
                            <div className="main-title">
                                <h1>Quick Pay QR</h1>
                            </div>
                            <div>
                                <ul className="my-3">
                                    <li>
                                        <div className="icon">
                                            <img src={IconImage} alt="Icon" />
                                        </div>
                                        <div className="text-column">
                                            <h4>Sumérgete en una nueva era de comodidad.<br />
                                                Dile adiós a las esperas.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src={IconImage} alt="Icon" />
                                        </div>
                                        <div className="text-column">
                                            <h4>Rompe con la rutina de esperar.<br />
                                                Pide y paga en segundos con tecnología QR.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src={IconImage} alt="Icon" />
                                        </div>
                                        <div className="text-column">
                                            <h4>Tu tiempo es valioso y nosotros lo entendemos.<br />
                                                Descubre una experiencia sin igual, donde cada segundo cuenta.</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <span className="demo-container">
                                <div className="icon-column">
                                    <a href="#">
                                        <img src={IconPlayDemo} alt="Icon" style={{ width: '100px' }} />
                                    </a>
                                </div>
                                <div className="text-column hover-effect" style={{ letterSpacing: '3px' }}>
                                    VER DEMO
                                </div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="contenedor12 col-lg-6 p-2 mb-5">
                    <div className="container">
                        <img src={QRBackground} alt="Icon" />
                    </div>
                    {/*<div className="temp-wrapper">
                        <div className="px">
                            <div className="px__body">
                                <div className="px__body__cut"></div>
                                <div className="px__body__speaker"></div>
                                <div className="px__body__sensor"></div>
                                <div className="px__body__mute"></div>
                                <div className="px__body__up"></div>
                                <div className="px__body__down"></div>
                                <div className="px__body__right"></div>
                            </div>
                            <div className="px__screen">
                                <div className="px__screen__">
                                    <div className="center">
                                        <div className="square"><img src={QRScreen} alt="Icon" />
                                            <div className="scan"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>

            <ComoFunciona />
            <Ventajas />
        </div>
    );
};


