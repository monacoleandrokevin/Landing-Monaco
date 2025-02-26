import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";
import ProductCardCart from "../../common/productCardCart/ProductCardCart";

const Cart = () => {
  const { cart, removeCart, removeById, getTotal } = useContext(CartContext);
  let total = getTotal();

  return (
    <div className="container mt-5">
      <h2 className="text-center">🛒 Carrito de Compras</h2>

      {/* Si el carrito está vacío */}
      {cart.length === 0 ? (
        <div className="text-center mt-4">
          <h4>Tu carrito está vacío</h4>
          <Link to="/" className="btn btn-primary mt-3">
            Volver a la tienda
          </Link>
        </div>
      ) : (
        <>
          {/* Listado de productos en el carrito */}
          <div className="row justify-content-center">
            <div className="col-md-8">
              {cart.map((product) => (
                <ProductCardCart
                  key={product.id}
                  product={product}
                  removeById={removeById}
                />
              ))}
            </div>
          </div>

          {/* Total y botones */}
          <div className="text-center mt-4">
            <h3>
              Total: <span className="text-success fw-bold">${total}</span>
            </h3>

            <button onClick={removeCart} className="btn btn-danger mt-3 mx-2">
              Vaciar Carrito
            </button>

            <Link to={"/checkout"} className="btn btn-success mt-3 mx-2">
              Finalizar Compra
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
