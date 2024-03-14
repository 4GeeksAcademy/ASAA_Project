import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/form.css";

export const ForgotPassword = () => {
    const { store, actions } = useContext(Context);
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [pwShown, setPwShown] = useState(false);
    const [ email, setEmail ] = useState();
    const navigate = useNavigate();



    function handleLogin(e) {
        e.preventDefault()
        actions.sendPassword(email)
    }

    const showHidePassword = () => {
        setPwShown(!pwShown);
    };

    return (
        <div
            className="text-center"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
                marginBottom: "20px",
            }}
        >
            <div className="animated-container">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>


                <div className="container">
                    <header className="head-form mt-5 text-white ">
                        <h2>He olvidado mi contraseña</h2>
                    </header>

                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            style={{ background: "white", borderRight: "none" }}
                        >
                            <i className="fa fa-user-circle"></i>
                        </span>
                        <input
                            style={{
                                background: "white",
                                borderLeft: "none",
                                borderRight: "none",
                            }}
                            type="text"
                            className="form-control mx-auto"
                            placeholder="@ Email"
                            value={credentials.email}
                            onChange={(event) => {
                                setCredentials({
                                    ...credentials,
                                    email: event.target.value,
                                });
                            }}
                            required
                        />
                    </div>
                    <div className="text-center pt-1 mb-3 pb-1 d-flex flex-column">
                        <button
                            className="btn mb-1 btn-primary"
                            type="button"
                            onClick={handleLogin}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

