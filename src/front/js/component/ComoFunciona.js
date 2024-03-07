import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/funciona.css";
import ImageScan from "../../img/scan.png";
import ImagePidiendo from "../../img/pidiendo.png";
import ImageSirviendo from "../../img/sirviendo.png";
import ImagePagando from "../../img/pagando.png";


export const ComoFunciona = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div id="ComoFunciona" className="white-line"></div>
            <div className="gradient w-100" >
                <div className="container-fluid">
                    {/* Primera Fila */}
                    <div className="row">
                        <div className="col-12  text-center main-title-funciona">
                            Como Funciona
                        </div>
                    </div>

                    <div className="row mt-5 align-items-center justify-content-center w-75 mx-auto">
                        <div className="col-6 custom-col">
                            {/* Columna 1 con dos subcolumnas */}
                            <div className="row align-items-end">
                                <div className="col-3">
                                    {/* Contenido de la subcolumna 1 */}
                                    <h1 className="number mb-0">1.</h1>
                                </div>
                                <div className="col-9">
                                    {/* Contenido de la subcolumna 2 */}
                                    <img src={ImageScan} alt="Imagen" className="img-fluid img-funciona" />
                                    <h1 className="text mb-3" >Escanea el QR de tu mesa</h1>
                                </div>
                            </div>
                            {/* Fin de la columna 1 */}
                        </div>

                        <div className="col-6 " >
                            {/* Columna 2 con dos subcolumnas */}
                            <div className="row align-items-end">
                                <div className="col-3 ">
                                    {/* Contenido de la subcolumna 1 */}
                                    <h1 className="number mb-0">2.</h1>
                                </div>
                                <div className="col-9">
                                    {/* Contenido de la subcolumna 2 */}
                                    <img src={ImagePidiendo} className="img-fluid img-funciona" />
                                    <h1 className="text mb-3">Haz tu pedido</h1>
                                </div>
                            </div>
                            {/* Fin de la columna 2 */}
                        </div>
                    </div>

                    {/* Tercera Fila */}
                    <div className="row mt-5 mb-5 align-items-center justify-content-center w-75 mx-auto">
                        <div className="col-6 custom-col">
                            {/* Columna 1 con dos subcolumnas */}
                            <div className="row align-items-end">
                                <div className="col-3 ">
                                    {/* Contenido de la subcolumna 1 */}
                                    <h1 className="number mb-0">3.</h1>
                                </div>
                                <div className="col-9">
                                    {/* Contenido de la subcolumna 2 */}
                                    <img src={ImageSirviendo} alt="Imagen" className="img-fluid img-funciona" />
                                    <h1 className="text mb-3">Disfruta de tu pedido</h1>
                                </div>
                            </div>
                            {/* Fin de la columna 1 */}
                        </div>

                        <div className="col-6 ">
                            {/* Columna 2 con dos subcolumnas */}
                            <div className="row align-items-end">
                                <div className="col-3 ">
                                    {/* Contenido de la subcolumna 1 */}
                                    <h1 className="number mb-0">4.</h1>
                                </div>
                                <div className="col-9">
                                    {/* Contenido de la subcolumna 2 */}
                                    <img src={ImagePagando} alt="Imagen" className="img-fluid img-funciona" />
                                    <h1 className="text mb-3">Paga tu ticket</h1>
                                </div>
                            </div>
                            {/* Fin de la columna 2 */}
                        </div>
                    </div>
                </div>
                <div style={{ height: '20px' }}></div>
            </div>
        </>
    );
};

