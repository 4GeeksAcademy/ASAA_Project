import React, { Component } from "react";

export const Welcome = () => (
	<div className="container border text-white">
        <h1 className=" text-center">Le petit Cafe</h1>
        <img src="https://hporro.com/wp-content/uploads/2020/05/qrdemo.png"/>
        <h6 className=" text-center">Bienvenidos</h6>
        <span >
            Es un placer tenerte aqu. Sin mas dilacon empecemos!
        </span>
        <div className="container botones">
            <button className="col-12"> 
                Entra como invitado
            </button>
            <button className="col-6"> 
              Registrate
            </button>
            <button className="col-6"> 
             Login
            </button>
        </div>
    </div>
);
