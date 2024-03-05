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


export const LandingPage = () => {
  const { store, actions } = useContext(Context);

  return (


    <div className="d-flex flex-wrap justify-content-center align-items-center text-white contenedor">

      <div className="background1 w-100 d-flex flex-lg-row flex-column ">
        <div className="contenedor1 col-lg-6  ">
          <div className="p-2">
            <div className="contenedor11">
              <span className="text-span">SCAN-ORDER-ENJOY-PAY</span>

              <div className="main-title">
                <h1>Quick Pay QR</h1>
              </div>

              <div>
                <ul className="my-3">
                  <li>
                    <div className="icon">
                      <img src={IconImage} alt="Icon" /></div>
                    <div className="text-column">
                      <h4>Sumérgete en una nueva era de comodidad.<br />
                        Dile adiós a las esperas.</h4>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <img src={IconImage} alt="Icon" />
                    </div>

                    <div className="text-column">
                      <h4>Rompe con la rutina de esperar.<br />
                        Pide y paga en segundos con tecnología QR.</h4>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <img src={IconImage} alt="Icon" />
                    </div>
                    <div className="text-column">
                      <h4>Tu tiempo es valioso y nosotros lo entendemos.<br />
                        Descubre una experiencia sin igual, donde cada segundo cuenta.</h4>
                    </div>
                  </li>
                </ul>
              </div>
              <span className="demo-container">
                <div className="icon-column">
                  <img src={IconPlayDemo} alt="Icon" style={{ width: '100px' }} />
                </div>
                <div className="text-column" style={{letterSpacing: '3px' }}>
                  VER DEMO
                </div>
              </span>


            </div>
          </div>
        </div>


        <div className="contenedor12 col-lg-6 p-2 mb-5 ">
          <div class="container">
            <img src={QRBackground} alt="Icon" />

          </div>
          <div className="temp-wrapper">
            <div className="px">
              <div className="px__body">
                <div className="px__body__cut"></div>
                <div className="px__body__speaker"></div>
                <div className="px__body__sensor"></div>
                <div className="px__body__mute"></div>
                <div className="px__body__up"></div>
                <div className="px__body__down"></div>
                <div className="px__body__right"></div>
              </div>

            <div className="px__screen">
                <div className="px__screen__">
                  <div className="center">
                    <div className="square"><img src={QRScreen} alt="Icon" />
                      <div className="scan"></div>
                    </div>
                  </div>
                </div>
            </div>

            </div>
          </div>
        </div>
      </div>





















/*como funciona segunda parte del landing page*/
/* <div className="contenedor2   text-white">
 
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
 </div>*/













/*Ventajas tercera parte del landing page*/
/* <div className="contenedor3 text-white w-100 " >
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
</div>
);
};
