import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/camarero_interfaz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPencilAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import defaultImage from "../../img/img-business-demo/avatar.png";

export const EditProfile_Staff = () => {
    const [phone, setPhone] = useState("+34 123 456 789");
    const [city, setCity] = useState("Madrid");
    const [position, setPosition] = useState("Camarero");
    const [name, setName] = useState("John Doe");
    const [isEditingName, setIsEditingName] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleNameEdit = () => {
        setIsEditingName(!isEditingName);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSaveChanges = () => {
<<<<<<< HEAD
        // puedes enviar los cambios al servidor o actualizar el estado global
        // puedes agregar lógica para manejar otros campos (teléfono, ciudad, posición, etc.)
=======
        // Aquí puedes enviar los cambios al servidor o actualizar el estado global, según tus necesidades.
        // También puedes agregar lógica para manejar otros campos (teléfono, ciudad, posición, etc.).
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
        console.log("Cambios guardados:", { name, phone, city, position });
    };

    return (
        <div className="container border mt-2 mb-5 p-4" style={{ maxWidth: "500px" }}>
            <div className="row mb-3">
                <div className="col d-flex align-items-center justify-content-center">
                    <Link to="/CamareroInterfaz" style={{ marginRight: "auto", color: "black" }}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </Link>
                    <span className="text-center">
                        <h5 className="d-inline-block ml-2 mb-0">Editar Perfil</h5>
                    </span>
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
                            position: "relative",
                        }}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0,
                                cursor: "pointer",
                            }}
                        />
                        {selectedFile ? (
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Selected"
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        ) : (
                            <img
                                src={defaultImage}
                                alt="Default"
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    <h2 className="name-staff mt-4 mb-4">
                        {isEditingName ? (
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                onBlur={handleNameEdit}
                                autoFocus
                            />
                        ) : (
                            <>
                                {name}
                                <FontAwesomeIcon
                                    icon={faPencilAlt}
                                    onClick={handleNameEdit}
                                    style={{ cursor: "pointer", marginLeft: "15px", width: "20px" }}
                                />
                            </>
                        )}
                    </h2>
                </div>
            </div>

            <div className="row mb-4">
                {/* Column 1 */}
                <div className="col-md-6 staff-information1">
                    Teléfono
                </div>
                {/* Column 2 */}
                <div className="col-md-6 staff-information2">
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
            </div>

            <div className="row mb-4">
                {/* Column 1 */}
                <div className="col-md-6 staff-information1">
                    Ciudad
                </div>
                {/* Column 2 */}
                <div className="col-md-6 staff-information2">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
            </div>

            <div className="row mb-4">
                {/* Column 1 */}
                <div className="col-md-6 staff-information1">
                    Posición
                </div>
                {/* Column 2 */}
                <div className="col-md-6 staff-information2">
                    <input
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-12 p-0">
                    <button onClick={handleSaveChanges} className="custom-button-guardar">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
<<<<<<< HEAD
};
=======
};
>>>>>>> 1cf83a2fd7019556e50de560c531dcd24577266a
