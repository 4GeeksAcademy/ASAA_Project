import React from "react";
import { Context } from "../store/appContext";

import "../../styles/afiliados.css";

export const Afiliados = () => {
    return (

        <div id="Afiliados" className="mygradient-afiliados">
            <h1 className="mytitle-afiliados mt-5">Nuestros Afiliados</h1>
            <div className="table-responsive table-container">
                <table >
                    <thead>
                        <tr>
                            <th className="letra1"><a href="/welcome" style={{ textDecoration: 'none', color: 'white' }}>Le Petit Café</a></th>
                            <th className="letra2">Parisian Café</th>
                            <th className="letra3">Le Charme Café</th>
                            <th className="letra4">Le Croissant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="letra5">La Petite Pâtisserie</th>
                            <th className="letra6">L'Amour Latte</th>
                            <th className="letra7">Le Jardin du Café</th>
                            <th className="letra8">La Vie en Espresso</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};