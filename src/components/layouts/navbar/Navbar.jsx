import "./navbar.css";
import logo from "../../../assets/images/logo.webp";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* Logo a la izquierda */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="MegaNode Logo" className="navbar-logo" />
        </Link>

        {/* Botón de menú y carrito en mobile */}
        <div className="d-flex align-items-center d-lg-none">
          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <CartWidget />
        </div>

        {/* Contenido del Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Etiquetas en el centro */}
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Todas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/desktop" className="nav-link">
                PC de Escritorio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/notebook" className="nav-link">
                Notebooks
              </Link>
            </li>
          </ul>

          {/* Carrito alineado a la derecha en pantallas grandes */}
          <div className="d-none d-lg-flex align-items-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};
