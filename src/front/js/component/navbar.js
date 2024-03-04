import React from "react";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-z46hygEnCLDowFLyWiE318sv/user-6EUxcKfTnc4RMWo7BbaFkQE3/img-FbabyiO98jIvWENCRd2RWimb.png?st=2024-03-04T18%3A55%3A36Z&amp;se=2024-03-04T20%3A55%3A36Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-03-04T04%3A15%3A49Z&amp;ske=2024-03-05T04%3A15%3A49Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=8JlEDGq8mDXOgd38Kfow43%2ByWlP6cFO0hJDk434g%2FYA%3D"
            alt=""
            width="50"
            height="50"
            className="d-inline-block align-text-top me-2"
          />
          BIZ
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ventajas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Funcionamiento
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Partners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <button className="btn demo-button">VIEW DEMO</button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
