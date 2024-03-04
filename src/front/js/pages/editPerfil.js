import React from "react";

export const EditPerfil = () => (
  <div className="container border text-white">
    <h1>Edit your profile</h1>
    <form action="/registro" method="post">
      <label className="col-3" htmlFor="email">Email:</label>
      <input className="col-9" type="email" id="email" name="email" required />
        <br/>
      <label className="col-3" htmlFor="email">Contraseña:</label>
      <input className="col-9" type="password" id="password" name="password" required />
      <br/>
      <label className="col-3" htmlFor="email">Ciudad:</label>
      <input className="col-9" type="text" id="ciudad" name="ciudad" required />
      <br/>
      <label className="col-3" htmlFor="email">Posicion:</label>
      <input className="col-9" type="text" id="posicion" name="posicion" required />
      <br/>
      <input className="col-12" type="submit" value="Login" />
    </form>
    <div className="container">
      <button className="col-12 my-2">connect with facebook</button>
      <button className="col-12 my-2">connect with google</button>
    </div>
  </div>
);

export default EditPerfil;
