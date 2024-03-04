import React from "react";

export const Login = () => (
  <div className="container border text-white">
    <h1>Login</h1>
    <span>Bienvenido a Le petit Cafe</span>
    <form action="/registro" method="post">
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" id="email" name="email" required />
      <br />
      <br />

      <label htmlFor="password">Contraseña:</label>
      <br />
      <input type="password" id="password" name="password" required />
      <br />
      <br />

      <input className="col-12" type="submit" value="Login" />
    </form>
    <div className="container">
      <button className="col-12 my-2">connect with facebook</button>
      <button className="col-12 my-2">connect with google</button>
    </div>
  </div>
);

export default Login;
