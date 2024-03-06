import React from "react";
import "../../styles/footer.css";


export const Footer = () => (
	<footer className="container-fluid">

		<div className="row">
			<div className="col-6 col-md-2  d-flex align-items-center justify-content-end p-0">
				<img
					src="https://play-lh.googleusercontent.com/NciBqxLXBwgKfKDiVCJ9y_FrbEXVtHuIJyLaTNGiIw88S-MJ_iS1442Epi5gD_ghpDg=w240-h480-rw"
					alt="logo"
					width="100"
					height="100"
					className="d-inline-block align-text-top me-2"
				/>
			</div>

			<div className="col-6 col-md-10  d-flex align-items-center p-0">
				<h1 className="title" style={{ margin: "0", textAlign: "left" }}>
					Quick Pay QR
				</h1>
			</div>
		</div>

		<div className="row">
			<div className="col-4 text-white footer-column1 mb-5">
				<h2>Empresa</h2>
				<p>Sobre Nosotros</p>
				<p>Servicios</p>

				<p>Precios</p>
			</div>

			<div className="col-4  text-white footer-column2 mb-5">
				<h2>Ayuda</h2>
				<p>Atención al Cliente</p>
				<p>Términos y Condiciones</p>
				<p>Política de Privacidad</p>
			</div>


			<div className="col-4 ">

				<label
					htmlFor="Suscribirse"
					className="form-label text-light font-weight-bold"
				>
					Suscríbete a nuestra Newsletter
				</label>
				<div className="d-flex">
					<input
						type="text"
						id="Suscribirse"
						className="form-control rounded-pill mt-1 me-2"
						placeholder="Escribe tu Email"
						style={{ width: "60%" }}
					/>
					<button
						type="submit"
						className="btn custom-btn mt-2"
					>
						Suscribir
					</button>
				</div>
			</div>
		</div>


		<div className="row custom-border-top">

			<div className="col-12 d-flex justify-content-between">
				<p className="m-2 mx-5 text-secondary">Copyright © 2024 Quick Pay QR</p>
				<p className="m-2 mx-5 text-secondary">Diseñado por ASAA</p>
			</div>
		</div>

	</footer>
);
