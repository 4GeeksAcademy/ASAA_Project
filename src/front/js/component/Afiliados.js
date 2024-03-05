import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/afiliados.css";

export const Afiliados = () => {


    return (
        <div className="contenedor4">
            <h1 className="title">Nuestros Afiliados</h1>
            <div className="table-container mb-5">

                <table>
                    <tr>
                        <th className="letra1">Le Petit Café</th>
                        <th className="letra2">Parisian Café</th>
                        <th className="letra3">Le Charme Café</th>
                        <th className="letra4">Le Croissant</th>
                    </tr>
                    <tr>
                        <th className="letra5">La Petite Pâtisserie</th>
                        <th className="letra6">L'Amour Latte</th>
                        <th className="letra7">Le Jardin du Café</th>
                        <th className="letra8">La Vie en Espresso</th>
                    </tr>
                </table>
            </div>
            </div>
            );
};