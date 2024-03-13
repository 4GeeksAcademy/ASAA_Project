import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/form_login_signup.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [pwShown, setPwShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.token) navigate("/private");
  }, [store.token]);

  const handleLogin = async () => {
    try {
      let success = await actions.login(credentials);
      if (success) {
        navigate("/private");
      } else {
        alert("Wrong password or username.");
        setCredentials({
          ...credentials,
          password: "",
        });
      }
    } catch (error) {
      alert("Error during login:", error);
    }
  };

  const showHidePassword = () => {
    setPwShown(!pwShown);
  };

  return (
    <>
      <div className="container border mt-2 p-4 " style={{ maxWidth: "600px" }}>
        <div className="row mb-3 text-login">
          <div className="col d-flex align-items-center justify-content-center">
            <Link to="/welcome" style={{ marginRight: "auto", color: "black" }}>
              <i className="fa-solid fa-chevron-left"></i>
            </Link>
            <span className="text-center">
              <i className="bi bi-arrow-left-circle"></i>
              <h5 className="d-inline-block ml-2 mb-0">Login</h5>
            </span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3 mt-5">
          <div className="col text-center ">
            <h1 className="title-login-signup">Bienvenido a Le Petit Café</h1>
            <p className="mt-3 subtitle-login-signup">Añade tu Email para registrarte.</p>
          </div>
        </div>

        <form>
          <div className="container">
            <div className="field-set mt-5">
              <div className="form-group">
                <label htmlFor="email" className="span-title-email-password">
                  Dirección Email
                </label>
                <div className="input-group mt-1 mb-4">
                  <span className="input-group-text" >
                    <i className="fa fa-user-circle"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control custom-input-login-signup"
                    id="email"
                    placeholder="@ Email"
                    value={credentials.email}
                    onChange={(event) => {
                      setCredentials({
                        ...credentials,
                        email: event.target.value,
                      });
                    }}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="span-title-email-password">
                  Contraseña
                </label>
                <div className="input-group mb-4 mt-1" >
                  <span className="input-group-text">
                    <i className="fa fa-key"></i>
                  </span>
                  <input
                    type={pwShown ? "text" : "password"}
                    className="form-control custom-input-login-signup"
                    id="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(event) => {
                      setCredentials({
                        ...credentials,
                        password: event.target.value,
                      });
                    }}
                    required
                  />
                  <span className="input-group-text eye-icon" onClick={showHidePassword}>
                    <i className={`fa ${pwShown ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"></i>
                  </span>
                </div>
              </div>


              <span className="span-forgot-password" style={{ display: "block", textAlign: "center" }}>¿Olvidaste tu Contraseña?</span>
              <div className="text-center pt-1 mb-3 pb-1 d-flex flex-column">
                <button className="btn mb-1 button-login" type="button" onClick={handleLogin}>
                  LOGIN
                </button>
              </div>
              <span className="span-not-registered">
                ¿No estás registrado?{" "}
                <Link to="/signup" style={{ textDecoration: "none", fontWeight: "bold", color: " #d9534f" }}>
                  Crea tu cuenta
                </Link>
              </span>

            </div>
          </div>
        </form>
      </div>
    </>
  );
};
