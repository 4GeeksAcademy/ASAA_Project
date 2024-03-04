import React from "react";

export const Register = () => (
  <div className="container border text-white">
    <h1>Crea tu cuenta</h1>
    <span>Escribe tu nombre, email y contraseña para registrarte</span>
    <form action="/registro" method="post">
      <label  htmlFor="nombre">Nombre:</label><br/>
      <input type="text" id="nombre" name="nombre" required /><br/><br/>

      <label htmlFor="email">Email:</label><br/>
      <input type="email" id="email" name="email" required /><br/><br/>

      <label htmlFor="password">Contraseña:</label><br/>
      <input type="password" id="password" name="password" required /><br/><br/>

      <input className="col-12" type="submit" value="Registrar" />
    </form>
    <div className="container">
        <span>
            Al registrarse estas de acuerdo con nuestras condiciones y politica de privacidad 
        </span>
            <button className="col-12 my-2"> 
                connect with facebook
            </button>
            <button className="col-12 my-2"> 
                connect with google
            </button>
    </div>
  </div>
);

export default Register;
