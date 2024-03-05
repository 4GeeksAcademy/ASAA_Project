import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "black", fontFamily: "Lato, sans-serif" }}>
      <style>
        {`
          .custom-hover:hover {
            color: #337ab7  !important;
          }
        `}
      </style>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://play-lh.googleusercontent.com/NciBqxLXBwgKfKDiVCJ9y_FrbEXVtHuIJyLaTNGiIw88S-MJ_iS1442Epi5gD_ghpDg=w240-h480-rw"
            alt="logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <Link to="#" className="nav-link custom-hover" style={{ color: "white", fontFamily: "Lato, sans-serif", fontWeight: 400, textDecoration: "none", transition: "color 0.3s" }}>
                Home
              </Link>
            </li>
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <Link to="#" className="nav-link custom-hover" style={{ color: "white", fontFamily: "Lato, sans-serif", fontWeight: 400, textDecoration: "none", transition: "color 0.3s" }}>
                Ventajas
              </Link>
            </li>
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <Link to="#" className="nav-link custom-hover" style={{ color: "white", fontFamily: "Lato, sans-serif", fontWeight: 400, textDecoration: "none", transition: "color 0.3s" }}>
                Funcionamiento
              </Link>
            </li>
            <li className="nav-item" style={{ margin: "0 10px" }}>
              <Link to="#" className="nav-link custom-hover" style={{ color: "white", fontFamily: "Lato, sans-serif", fontWeight: 400, textDecoration: "none", transition: "color 0.3s" }}>
                Partners
              </Link>
            </li>
            <li className="nav-item" style={{ margin: "0 10px", marginRight: "100px" }}>
              <Link to="#" className="nav-link custom-hover" style={{ color: "white", fontFamily: "Lato, sans-serif", fontWeight: 400, textDecoration: "none", transition: "color 0.3s" }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
