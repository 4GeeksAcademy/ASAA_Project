import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/telefono.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../component/contactForm";
import NavigationBar from "../component/navbar";

export const LandingPage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center text-white contenedor">
      <NavigationBar />
      <div className="background1 w-100 d-flex flex-lg-row flex-column ">
        <div className="contenedor1 col-lg-6  ">
          <div className="p-2">
            <div className="contenedor11">
              <span>SCAN-ORDER-ENJOY-PAY</span>

              <div className="titular">
                <h1>Quick Pay QR</h1>
              </div>
              <div>
                <ul>
                  <li className="my-3">
                    <FontAwesomeIcon
                      className="me-1"
                      icon={faX}
                      style={{ color: "#ffffff" }}
                    />
                    Sumergete en una nueva era de comodidad. Dile adios a las
                    esperas.
                  </li>
                  <li className="my-3">
                    <FontAwesomeIcon
                      className="me-1"
                      icon={faX}
                      style={{ color: "#ffffff" }}
                    />
                    Rompe con la rutina de esperar. Pide y paga en segundos con
                    tecnologia QR.
                  </li>
                  <li className="my-3">
                    <FontAwesomeIcon
                      className="me-1"
                      icon={faX}
                      style={{ color: "#ffffff" }}
                    />
                    Tu tiempo es valioso y nosotros lo entendemos. Descubre una
                    experiencia sin igual, donde cada segundo cuenta.
                  </li>
                </ul>
                <span>
                  <FontAwesomeIcon
                    className="me-4 mt-5 sombreado"
                    icon={faPlay}
                    style={{ color: "#ffffff" }}
                  />
                  VIEW DEMO
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor12 col-lg-6 p-2 mb-3 ">
          <div className="phone ">
            {/* Contenido del teléfono */}
            <div className="phone-back">
              <div className="phone-left-side">
                <div className="phone-antena"></div>
                <div className="phone-button top"></div>
                <div className="phone-button"></div>
                <div className="phone-button bottom"></div>
                <div className="phone-antena bottom"></div>
              </div>
              <div className="phone-bottom">
                <div className="phone-antena"></div>
                <div className="bottom-speaker">
                </div>
                <div className="phone-screw">
                  <div></div>
                </div>
                <div className="phone-charger"></div>
                <div className="phone-screw right">
                  
                </div>
                <div className="bottom-speaker right">
                </div>
                <div className="phone-antena right"></div>
              </div>
            </div>
            <div className="phone-screen"></div>
            <div className="phone-display">
              <div className="phone-notch">
                <div className="phone-speaker"></div>
              </div>
              <div className="display-content  ">
                <h1 className="mt-5 p-5 ">
                  <span className="p-3">Quick Qr Pay!</span>
                 <img className="qr" src="https://hporro.com/wp-content/uploads/2020/05/qrdemo.png"/>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*como funciona segunda parte del landing page*/}
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
      {/*Ventajas tercera parte del landing page*/}
      <div className="contenedor3 text-white w-100 " >
        <div>
          <h5 className="text-center my-4 titular borderAnimado">
            Ventajas para usuarios y empresas.
          </h5>
        </div>
        <div className="row">
     
          <div className="col-md-6 p-2">
          <FontAwesomeIcon className="mb-4 ms-5 " icon={faCity} size="2xl" />
            <div className="p-5">
              <h6>Pago rapido y comodo desde el movil.</h6>
              <p>
                Pide y abona la transacion de manera veloz y conveniente a
                traves de tu propio dispositivo.
              </p>
            </div>
            <div className="p-5">
              <h6>Pago rapido y comodo desde el movil.</h6>
              <p>
                Pide y abona la transacion de manera veloz y conveniente a
                traves de tu propio dispositivo.
              </p>
            </div>
            <div className="p-5">
              <h6>Pago rapido y comodo desde el movil.</h6>
              <p>
                Pide y abona la transacion de manera veloz y conveniente a
                traves de tu propio dispositivo.
              </p>
            </div>
          </div>
          <div className="col-md-6 ">
          <FontAwesomeIcon className="mb-4 ms-5" icon={faUser} size="2xl" />
          <div className="p-5">
              <h6>Pago rapido y comodo desde el movil.</h6>
              <p>
                Pide y abona la transacion de manera veloz y conveniente a
                traves de tu propio dispositivo.
              </p>
            </div>
            <div className="p-5">
              <h6>Pago rapido y comodo desde el movil.</h6>
              <p>
                Pide y abona la transacion de manera veloz y conveniente a
                traves de tu propio dispositivo.
              </p>
            </div>
            <div className="p-5">
              <h6>Pago rapido y comodo desde el movil.</h6>
              <p>
                Pide y abona la transacion de manera veloz y conveniente a
                traves de tu propio dispositivo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*ContactForm*/}

      <ContactForm/>
    </div>
  );
};
