import React, { Component, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/pedidos.css";

import { Cafe } from "../component/cafe";


import ImageMenu from "../../img/img-business-demo/image_menu.png";

export const Menu = () => {




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

                {/* First Row */}
                <div className="row  text-light p-0 mb-0">

                    <img
                        src={ImageMenu}
                        alt="Selected Image"
                        className="img-fluid border"
                        style={{ maxWidth: "100%", maxHeight: "250px", objectFit: "fill" }}
                    />

                </div>

                <div className="row bg-secondary mb-2">
                    <div className="col-12 ti-choose-products">
                        <span style={{ margin: "5px 0 15px 20px" }}>Elige tus Productos</span>
                    </div>
                </div>

                {/* Third Row */}
                <div className="row bg-info text-light p-2 mb-2">

                    <Cafe />


                </div>

                {/* Fourth Row */}
                <div className="row bg-warning text-dark p-2 mb-2">


                    <div className="col-12 p-0">
                        <Link to="/resumenPedido" className="custom-button-add">
                           FINALIZAR Y VER TU PEDIDO
                        </Link>
                    </div>


                </div>


            </div>













        </>


    );
}


