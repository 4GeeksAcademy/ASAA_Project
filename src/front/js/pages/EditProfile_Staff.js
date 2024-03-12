import React from "react";
import { Link } from "react-router-dom";
import "../../styles/camarero_interfaz.css";
import ShopPhoto from "../../img/img-business-demo/coffeeshop.jpg";

export const EditProfile_Staff = () => {
    return (

        <div className="container border mt-2 p-4 " style={{ maxWidth: "500px" }}>
            <div className="row mb-5 text-white">
                <div className="col d-flex align-items-center justify-content-center">
                    <span className="icon-return-staff" style={{ marginRight: "auto", color: "black" }}>
                        <Link to="/CamareroInterfaz"><i class="fas fa-chevron-left" style={{ color: "black" }}></i></Link>
                    </span>

                </div>
            </div>


            <div className="row ">
                <div className="col">
                    <h1 className="edit-profile-staff">Editar Perfil</h1>
                </div>
            </div>

            <div className="row">
                <div className="col p-0 d-flex justify-content-center align-items-center">
                    <div
                        style={{
                            marginTop: "25px",
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg"
                            alt="Your Alt Text"
                            className="img-fluid"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col text-center">
                    <h2 className="name-staff mt-4 mb-5">John Doe</h2>
                </div>
            </div>


            <div className="row mb-4 staff-information">
                {/* Column 1 */}
                <div className="col-md-6 ">
                    Teléfono
                </div>
                {/* Column 2 */}
                <div className="col-md-6 ">
                    +34 123 456 789
                </div>
            </div>

            <div className="row mb-4 staff-information">
                {/* Column 1 */}
                <div className="col-md-6 ">
                    Ciudad
                </div>
                {/* Column 2 */}
                <div className="col-md-6 ">
                    Madrid
                </div>
            </div>

            <div className="row mb-4 staff-information">
                {/* Column 1 */}
                <div className="col-md-6 ">
                    Posición
                </div>
                {/* Column 2 */}
                <div className="col-md-6 ">
                    Camarero
                </div>

            </div>





        </div>



    );
};




