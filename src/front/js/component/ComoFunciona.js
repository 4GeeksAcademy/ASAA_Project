import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/funciona.css";
import IconImage from "../../img/Icon.png";
import "bootstrap/dist/css/bootstrap.min.css";

export const ComoFunciona = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="white-line"></div>
            <div className="gradient w-100">
                <div className="container-fluid mt-5">
                    {/* Primera Fila */}
                    <div className="row">
                        <div className="col-12 bg-info text-center main-title-funciona">
                            Como Funciona
                        </div>
                    </div>

                    <div className="row mt-5 align-items-center justify-content-center w-75 mx-auto">
                        <div className="col-6">
                            {/* Columna 1 con dos subcolumnas */}
                            <div className="row align-items-end">
                                <div className="col-3">
                                    {/* Contenido de la subcolumna 1 */}
                                    <h1 className="number mb-0">1.</h1>
                                </div>
                                <div className="col-9">
                                    {/* Contenido de la subcolumna 2 */}
                                    <img src="https://www.wikihow.com/images_en/thumb/8/82/Scan-a-QR-Code-Step-2-Version-3.jpg/v4-460px-Scan-a-QR-Code-Step-2-Version-3.jpg.webp" alt="Imagen" className="img-fluid img-funciona" />
                                    <h1 className="text mb-3" >Escanea el QR de tu mesa</h1>
                                </div>
                            </div>
                            {/* Fin de la columna 1 */}
                        </div>

                        <div className="col-6 ">
                            {/* Columna 2 con dos subcolumnas */}
                            <div className="row align-items-end">
                                <div className="col-3 ">
                                    {/* Contenido de la subcolumna 1 */}
                                    <h1 className="number mb-0">2.</h1>
                                </div>
                                <div className="col-9">
                                    {/* Contenido de la subcolumna 2 */}
                                    <img src="https://www.wikihow.com/images_en/thumb/8/82/Scan-a-QR-Code-Step-2-Version-3.jpg/v4-460px-Scan-a-QR-Code-Step-2-Version-3.jpg.webp" alt="Imagen" className="img-fluid img-funciona" />
                                    <h1 className="text mb-3">Conforma tu pedido</h1>
                                </div>
                            </div>
                            {/* Fin de la columna 2 */}
                        </div>
                    </div>

                    {/* Tercera Fila */}
                    <div className="row mt-5 mb-5 align-items-center justify-content-center w-75 mx-auto">
                        <div className="col-6 ">
                            {/* Columna 1 con dos subcolumnas */}
                            <div className="row align-items-end">
                                <div className="col-3 ">
                                    {/* Contenido de la subcolumna 1 */}
                                    <h1 className="number mb-0">3.</h1>
                                </div>
                                <div className="col-9">
                                    {/* Contenido de la subcolumna 2 */}
                                    <img src="https://www.wikihow.com/images_en/thumb/8/82/Scan-a-QR-Code-Step-2-Version-3.jpg/v4-460px-Scan-a-QR-Code-Step-2-Version-3.jpg.webp" alt="Imagen" className="img-fluid img-funciona" />
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
                                    <img src="https://www.wikihow.com/images_en/thumb/8/82/Scan-a-QR-Code-Step-2-Version-3.jpg/v4-460px-Scan-a-QR-Code-Step-2-Version-3.jpg.webp" alt="Imagen" className="img-fluid img-funciona" />
                                    <h1 className="text mb-3">Paga tu ticket</h1>
                                </div>
                            </div>
                            {/* Fin de la columna 2 */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
