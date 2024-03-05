import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/funciona.css";

import IconImage from "../../img/Icon.png";

export const ComoFunciona = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="contenedor2 text-white">
            <h5 className="text-center my-4 titular main-title-como-funciona">Como funciona</h5>
            <div className="row">
                <div className="col-lg-6 col-md-12 my-2">
                    <div className="card-body">
                        <p className="card-text text-center my-2">
                            <span className="icon-text">
                                <img src={IconImage} alt="Icon" />
                            </span>
                            Escanea el QR de tu mesa
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="text-center rounded-image-container">
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ height: "18rem" }}
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSw2Vj5IzgUG02OTlOIsWmF8vNr9PB0fCABwTlkAAlIsYyzuJ"
                                    className="card-img-top"
                                    alt="Imagen redonda"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 my-2">
                    <div className="card-body">
                        <p className="card-text text-center my-2">
                            <span className="icon-text">
                                <img src={IconImage} alt="Icon" />
                            </span>
                            Confirma tu pedido
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="text-center rounded-image-container">
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ height: "18rem" }}
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSw2Vj5IzgUG02OTlOIsWmF8vNr9PB0fCABwTlkAAlIsYyzuJ"
                                    className="card-img-top"
                                    alt="Imagen redonda"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 my-2">
                    <div className="card-body">
                        <p className="card-text text-center my-2">
                            <span className="icon-text">
                                <img src={IconImage} alt="Icon" />
                            </span>
                            Disfruta de tu pedido
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="text-center rounded-image-container">
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ height: "18rem" }}
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSw2Vj5IzgUG02OTlOIsWmF8vNr9PB0fCABwTlkAAlIsYyzuJ"
                                    className="card-img-top"
                                    alt="Imagen redonda"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 my-2">
                    <div className="card-body">
                        <p className="card-text text-center my-2">
                            <span className="icon-text">
                                <img src={IconImage} alt="Icon" />
                            </span>
                            Paga tu cuenta
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="text-center rounded-image-container">
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ height: "18rem" }}
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSw2Vj5IzgUG02OTlOIsWmF8vNr9PB0fCABwTlkAAlIsYyzuJ"
                                    className="card-img-top"
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

