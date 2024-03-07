import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/form.css";

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
      alert("Error during Sign Up:", error);
    }
  };

  const showHidePassword = () => {
    setPwShown(!pwShown);
  };

  return (
    <div
      className="text-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        marginBottom: "20px",
      }}
    >
      <div className="animated-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>

        <form>
          <div className="container">
            <header className="head-form mt-5 text-white">
              <h2>Inicia sesion</h2>
            </header>

            <div className="field-set mt-5">
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  style={{ background: "white", borderRight: "none" }}
                >
                  <i className="fa fa-user-circle"></i>
                </span>

                <input
                  style={{
                    background: "white",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                  type="email"
                  className="form-control mx-auto"
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

              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  style={{ background: "white", borderRight: "none" }}
                >
                  <i className="fa fa-key"></i>
                </span>
                <input
                  type={pwShown ? "text" : "password"}
                  style={{
                    background: "white",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                  className="form-control mx-auto"
                  placeholder="Password"
                  value={user.password}
                  onChange={(event) => {
                    setUser({
                      ...user,
                      password: event.target.value,
                    });
                  }}
                />
                <span
                  className="input-group-text eye-icon"
                  onClick={showHidePassword}
                  style={{ background: "white", borderLeft: "none" }}
                >
                  <i
                    className={`fa ${pwShown ? "fa-eye-slash" : "fa-eye"}`}
                    aria-hidden="true"
                    type="button"
                    id="eye"
                    style={{ backgroundColor: "transparent" }}
                  ></i>
                </span>
              </div>

              <div className="text-center pt-1 mb-3 pb-1 d-flex flex-column">
                <button
                  className="btn mb-1 btn-primary"
                  type="button"
                  onClick={handleSignup}
                >
                  Inicia sesion
                </button>
              </div>

              <span className="text-white">
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "blue",
                  }}
                >
                  Date de alta
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};