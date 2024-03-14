import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/form.css";

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
            <header className="head-form mt-5 text-white ">
              <h2>Date de alta</h2>
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
                  type="text"
                  className="form-control mx-auto"
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

              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  style={{ background: "white", borderRight: "none" }}
                >
                  <i className="fa fa-key"></i>
                </span>
                <input
                  style={{
                    background: "white",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                  type={pwShown ? "text" : "password"}
                  className="form-control mx-auto"
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
                <Link to="/forgotPassword">He olvidado mi contraseña</Link>
              </div>

              <div className="text-center pt-1 mb-3 pb-1 d-flex flex-column">
                <button
                  className="btn mb-1 btn-primary"
                  type="button"
                  onClick={handleLogin}
                >
                  Date de alta
                </button>
              </div>
              <span className="text-white">
                Not a member?{" "}
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "blue",
                  }}
                >
                  Inicia sesion
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;