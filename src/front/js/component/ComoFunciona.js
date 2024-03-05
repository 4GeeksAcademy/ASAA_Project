import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/telefono.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../component/navbar";
import IconImage from "../../img/Icon.png"; // Importa la imagen
import IconPlayDemo from "../../img/IconPlayDemo.png";
import QRBackground from "../../img/qr_image.png";
import QRScreen from "../../img/qr_image_recta_white.png";


export const ComoFunciona = () => {
    const { store, actions } = useContext(Context);

    return (


        




/*como funciona segunda parte del landing page*/

                <div className="contenedor2   text-white">

                    <h5 className="text-center my-4 titular">Como funciona</h5>
                    <div className="d-flex flex-wrap justify-content-around">
                        <div className="col-lg-6 my-4  ">
                            <div className="card-body">
                                <p className="card-text text-center my-4">
                                    Escanea el QR de tu mesa.
                                </p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="text-center" style={{ width: "18rem" }}>
                                    <div
                                        className="d-flex justify-content-center align-items-center"
                                        style={{ height: "18rem" }}
                                    >
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSw2Vj5IzgUG02OTlOIsWmF8vNr9PB0fCABwTlkAAlIsYyzuJ"
                                            className="card-img-top rounded-circle"
                                            alt="Imagen redonda"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 my-4  ">
                            <div className="card-body">
                                <p className="card-text text-center my-4">Confirma tu pedido</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="text-center" style={{ width: "18rem" }}>
                                    <div
                                        className="d-flex justify-content-center align-items-center"
                                        style={{ height: "18rem" }}
                                    >
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSw2Vj5IzgUG02OTlOIsWmF8vNr9PB0fCABwTlkAAlIsYyzuJ"
                                            className="card-img-top rounded-circle"
                                            alt="Imagen redonda"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 my-4  ">
                            <div className="card-body">
                                <p className="card-text text-center my-4">
                                    Disfruta de tu pedido.
                                </p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="text-center" style={{ width: "18rem" }}>
                                    <div
                                        className="d-flex justify-content-center align-items-center"
                                        style={{ height: "18rem" }}
                                    >
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSw2Vj5IzgUG02OTlOIsWmF8vNr9PB0fCABwTlkAAlIsYyzuJ"
                                            className="card-img-top rounded-circle"
                                            alt="Imagen redonda"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 my-4  ">
                            <div className="card-body">
                                <p className="card-text text-center my-4">Paga tu cuenta.</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="text-center" style={{ width: "18rem" }}>
                                    <div
                                        className="d-flex justify-content-center align-items-center"
                                        style={{ height: "18rem" }}
                                    >
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSw2Vj5IzgUG02OTlOIsWmF8vNr9PB0fCABwTlkAAlIsYyzuJ"
                                            className="card-img-top rounded-circle"
                                            alt="Imagen redonda"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



);
};
