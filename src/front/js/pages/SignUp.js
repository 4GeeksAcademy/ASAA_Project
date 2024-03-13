import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/form_login_signup.css";

export const SignUp = () => {
  const { actions } = useContext(Context);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [pwShown, setPwShown] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const success = await actions.newUser(user);
      if (success) {
        navigate("/login"); // Redirecciona a la página de inicio de sesión si el registro tiene éxito
      } else {
        alert("Sign up failed. Please try again."); // Si falla el registro, mostrar mensaje de error
        setUser({
          ...user,
          password: "", // Limpiar el campo del password
        });
      }
    } catch (error) {
      alert("Error during Sign Up: " + error.message);
    }
  };

  const showHidePassword = () => {
    setPwShown(!pwShown);
  };

  return (
    <>
      <div className="container border mt-2 p-4" style={{ maxWidth: "600px" }}>
        <div className="row mb-3 text-login">
          <div className="col d-flex align-items-center justify-content-center">
            <Link to="/welcome" style={{ marginRight: "auto", color: "black" }}>
              <i className="fa-solid fa-chevron-left"></i>
            </Link>
            <span className="text-center">
              <i className="bi bi-arrow-left-circle"></i>
              <h5 className="d-inline-block ml-2 mb-0">Regístrate</h5>
            </span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3 mt-5">
          <div className="col text-center ">
            <h1 className="title-login-signup">Bienvenido a Le Petit Café</h1>
            <p className="mt-3 subtitle-login-signup">Añade tu Email y Contraseña para registrarte.</p>
          </div>
        </div>

        <form>
          <div className="container">
            <div className="field-set mt-2">
              <div className="form-group">
                <label htmlFor="email" className="span-title-email-password">
                  Dirección Email
                </label>
                <div className="input-group mt-1 mb-4">
                  <span className="input-group-text">
                    <i className="fa fa-user-circle"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control custom-input-login-signup"
                    value={user.email}
                    placeholder="@ Email"
                    onChange={(event) => {
                      setUser({
                        ...user,
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
                <div className="input-group mb-4 mt-1">
                  <span className="input-group-text">
                    <i className="fa fa-key"></i>
                  </span>
                  <input
                    type={pwShown ? "text" : "password"}
                    className="form-control custom-input-login-signup"
                    placeholder="Contraseña"
                    value={user.password}
                    onChange={(event) => {
                      setUser({
                        ...user,
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

              <div className="text-center pt-1 mb-3 pb-1 d-flex flex-column">
                <button className="btn mb-1 button-login" type="button" onClick={handleSignup}>
                  REGISTRATE*
                </button>
              </div>

              <span className="span-not-registered">
                ¿Ya estás registrado?{" "}
                <Link to="/login" style={{ textDecoration: "none", fontWeight: "bold", color: "#d9534f" }}>
                  LOGIN
                </Link>
              </span>
                
            </div>
          </div>
        </form>

        <div className="text-center" style={{ width: "100%" }}>
          <p className="span-conditions">*Al registrarte estás de acuerdo con nuestras Condiciones y Política de Privacidad.</p>
        </div>

      </div>
    </>
  );
};
