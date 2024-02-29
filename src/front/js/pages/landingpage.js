import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/telefono.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const LandingPage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div   className="d-flex flex-wrap justify-content-center align-items-center text-white contenedor">
      <div   className="contenedor1 col-lg-6   d-flex flex-column">
        {" "}
        {/* Mantenemos las clases de Bootstrap para el diseño en dispositivos grandes */}
        <div   className="p-2">
          <div   className="contenedor11">
            <span>SCAN-ORDER-ENJOY-PAY</span>

            <div>
              <h1>Quick Pay QR</h1>
            </div>
            <div>
              <ul>
                <li   className="my-3">
                  <FontAwesomeIcon
                      className="me-1"
                    icon={faX}
                    style={{ color: "#ffffff" }}
                    
                  />
                  Sumergete en una nueva era de comodidad. Dile adios a las
                  esperas.
                </li>
                <li   className="my-3">
                  <FontAwesomeIcon
                      className="me-1"
                    icon={faX}
                    style={{ color: "#ffffff" }}
                    
                  />
                  Rompe con la rutina de esperar. Pide y paga en segundos con
                  tecnologia QR.
                </li>
                <li   className="my-3">
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
                    className="me-1"
                  icon={faPlay}
                  style={{ color: "#ffffff" }}
                />
                VIEW DEMO
              </span>
            </div>
          </div>
        </div>
      </div>
      <div   className="contenedor12 col-lg-6   p-2 d-flex justify-content-center align-items-center mb-3">
        {" "}
        {/* Agregamos clases de Bootstrap para centrar verticalmente en dispositivos pequeños */}
        <div   className="phone ">
          {/* Contenido del teléfono */}
          <div  className="phone-back">
            <div  className="phone-left-side">
              <div  className="phone-antena"></div>
              <div  className="phone-button top"></div>
              <div  className="phone-button"></div>
              <div  className="phone-button bottom"></div>
              <div  className="phone-antena bottom"></div>
            </div>
            <div  className="phone-bottom">
              <div  className="phone-antena"></div>
              <div  className="bottom-speaker">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div  className="phone-screw">
                <div></div>
              </div>
              <div  className="phone-charger"></div>
              <div  className="phone-screw right">
                <div></div>
              </div>
              <div  className="bottom-speaker right">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div  className="phone-antena right"></div>
            </div>
          </div>
          <div  className="phone-screen"></div>
          <div  className="phone-display">
            <div  className="phone-notch">
              <div  className="phone-speaker"></div>
            </div>
            <div  className="display-content  ">
              <h1   className="mt-5 p-5 ">
                No pierdas el tiempo,el cual no podras recuperar. Con nuestro
                servicio tendras tiempo y comodidad.
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*como funciona segunda parte del landing page*/}
      <div   className="contenedor2   text-white">
        <h5   className="text-center my-4">Como funciona</h5>
        <div   className="d-flex flex-wrap ">
          <div   className="col-lg-6 my-4  ">
            <div   className="card-body">
              <p   className="card-text text-center my-4">
                Escanea el QR de tu mesa.
              </p>
            </div>
            <div   className="d-flex justify-content-center">
              <div   className="text-center" style={{ width: "18rem" }}>
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

          <div   className="col-lg-6 my-4  ">
            <div   className="card-body">
              <p   className="card-text text-center my-4">
                Escanea el QR de tu mesa.
              </p>
            </div>
            <div   className="d-flex justify-content-center">
              <div   className="text-center" style={{ width: "18rem" }}>
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

          <div   className="col-lg-6 my-4  ">
            <div   className="card-body">
              <p   className="card-text text-center my-4">
                Escanea el QR de tu mesa.
              </p>
            </div>
            <div   className="d-flex justify-content-center">
              <div   className="text-center" style={{ width: "18rem" }}>
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

          <div   className="col-lg-6 my-4  ">
            <div   className="card-body">
              <p   className="card-text text-center my-4">
                Escanea el QR de tu mesa.
              </p>
            </div>
            <div   className="d-flex justify-content-center">
              <div   className="text-center" style={{ width: "18rem" }}>
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
    </div>
  );
};
