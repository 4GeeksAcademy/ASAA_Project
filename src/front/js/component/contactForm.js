import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contact.css";

export const ContactForm = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid contact-form-container">
            <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <h1 className="title">
                        Let's Get in <strong>Touch!</strong>
                    </h1>
                    <p className="paragraph">
                        Tienes alguna pregunta o necesitas ayuda? Contáctanos mediante el
                        formulario de contacto. ¡Estamos deseando ayudarte!
                    </p>
                </div>

                <div className="col-lg-6 mt-5 pl-0">
                    <form className="custom-width">
                        <div className="mb-3 text-left">
                            <label
                                htmlFor="full-name"
                                className="form-label text-light font-weight-bold"
                            >
                                NOMBRE COMPLETO:
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                className="form-control rounded-pill mt-2"
                            />
                        </div>
                        <div className="mb-3 text-left">
                            <label
                                htmlFor="email"
                                className="form-label text-light font-weight-bold"
                            >
                                EMAIL:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control rounded-pill mt-2" 
                            />
                        </div>
                        <div className="mb-3 text-left">
                            <label
                                htmlFor="message"
                                className="form-label text-light font-weight-bold"
                            >
                                MENSAJE:
                            </label>
                            <textarea
                                id="message"
                                className="form-control mt-2" 
                                rows="5"
                            ></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button
                                type="submit"
                                className="btn custom-btn mt-2"
                            >
                                ENVIAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


