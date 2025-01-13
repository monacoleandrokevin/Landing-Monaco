import "./navbar.css";
import logo from "../../../assets/images/logo.webp";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* Logo a la izquierda */}
        <a href="/" className="navbar-brand">
          <img src={logo} alt="MegaNode Logo" className="navbar-logo" />
        </a>

        {/* Botón de colapso para móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido del Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Etiquetas en el centro */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/all">
                Todas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/desktopComputer">
                PC de Escritorio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/notebooks">
                Notebooks
              </a>
            </li>
          </ul>

          {/* Logo del carrito a la derecha */}
          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};
