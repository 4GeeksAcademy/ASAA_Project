import React, { Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"; 
import "../../styles/bienvenido.css";

export const Bienvenido = () => {
    return (
        <div className="inicio">
            <div className="container">
                <h1>Le Petit Café</h1>
                <img src="https://cdn.leonardo.ai/users/a922e852-ff87-4bc4-8047-3a1df5e1b270/generations/52155730-3cf5-4366-8484-f3dd7b564f3c/Default_coffee_2.jpg?w=512"></img>
                <h2>Bienvenidos</h2>
                <div className="buttons">
                    <div className="button1">
                        <Link to="/mesa">
                            <button>Entra como invitado</button>
                        </Link>
                    </div>
                    <div className="button2">
                        <button>Registrate</button>
                        <button>Accede</button>
                    </div>
                </div>
            </div>
        </div>
    )

};