import { useContext, useState } from "react";
import "./counter.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { CartContext } from "../../../context/CartContext";

const Counter = ({ item }) => {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // Para redirigir al carrito

  if (!item.stock) return null;

  const sumar = () => {
    if (counter < item.stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const onAdd = () => {
    let productToAdd = { ...item, quantity: counter };
    const cantidadSolicitada = counter;
    const cantidadRealAgregada = addToCart(productToAdd);

    if (cantidadRealAgregada === 0) {
      Swal.fire("Stock agotado", "No quedan unidades disponibles.", "warning");
      return;
    }

    let mensaje =
      cantidadRealAgregada < cantidadSolicitada
        ? `Solo se pudieron agregar ${cantidadRealAgregada} unidad(es) porque no hay más stock disponible.`
        : `${cantidadRealAgregada} unidad(es) de "${item.title}" fueron añadidas.`;

    Swal.fire({
      title: "Producto agregado al carrito",
      text: mensaje,
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Ir al carrito 🛒",
      cancelButtonText: "Seguir comprando",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      } else {
        navigate("/");
      }
    });
  };

  return (
    <div className="counter-container">
      {/* Contenedor de botones de sumar/restar */}
      <div className="counter-controls d-flex justify-content-center align-items-center">
        <button onClick={restar} className="btn btn-outline-secondary btn-sm">
          -
        </button>
        <span className="counter-value mx-3">{counter}</span>
        <button onClick={sumar} className="btn btn-outline-secondary btn-sm">
          +
        </button>
      </div>

      {/* Botón de agregar al carrito */}
      <button onClick={onAdd} className="btn btn-primary w-100 mt-3">
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
