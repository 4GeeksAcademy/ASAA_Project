import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const LandingPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="contenedor1 col-12 d-flex border ">
			<div className="col-6 border p-2">
				<div className="">
					<span>SCAN-ORDER-ENJOY-PAY</span>
				</div>
				<div>
					<h1>Quick Pay QR</h1>
				</div>
				<div>
					<ul>
						<li className="my-3">
							Sumergete en una nueva era de comodidad.
							Dile adios a las esperas.
						</li>
						<li className="my-3">
							Rompe con la rutina de esperar.Pide y paga en segundos con tecnologia QR.
						</li>
						<li className="my-3">
							Tu tiempo es valioso y nosotros lo entendemos.Descubre una experiencia sin igual,donde cada segundo cuenta.
						</li>
					</ul>
					<span>-VIEW DEMO</span>
				</div>
			</div>
			<div className="col-6 border p-2">
				<img className="telefono" src="https://cdn.leonardo.ai/users/2ba306e9-b50a-4f5b-83f5-8592c471d0d3/generations/26436d4d-5e97-47d8-9be9-94bb4e62f526/Default_Genera_una_imagen_de_un_iPhone_14_con_un_cdigo_QR_en_l_0.jpg"/>
			</div>
		</div>
	);
};
