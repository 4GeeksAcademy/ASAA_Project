import React from "react";

const ContactForm = () => (
  <div className="bg-primary h-screen d-flex align-items-center justify-content-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="text-4xl font-weight-bold mb-4 text-light">
            Let's Get in Touch!
          </h1>
          <p className="mb-4 text-light">
            Tienes alguna pregunta o necesitas ayuda? Contáctanos mediante el
            formulario de contacto. ¡Estamos deseando ayudarte!
          </p>
        </div>
        <div className="col-lg-6">
          <div className="bg-dark bg-opacity-50 rounded-lg p-4">
            <form>
              <div className="mb-3">
                <label
                  htmlFor="full-name"
                  className="form-label text-light font-weight-bold"
                >
                  FULL NAME:
                </label>
                <input
                  type="text"
                  id="full-name"
                  className="form-control bg-dark bg-opacity-50 border border-dark text-light py-2 px-4"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label text-light font-weight-bold"
                >
                  EMAIL:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control bg-dark bg-opacity-50 border border-dark text-light py-2 px-4"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="form-label text-light font-weight-bold"
                >
                  MESSAGE:
                </label>
                <textarea
                  id="message"
                  className="form-control bg-dark bg-opacity-50 border border-dark text-light py-2 px-4"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactForm;
