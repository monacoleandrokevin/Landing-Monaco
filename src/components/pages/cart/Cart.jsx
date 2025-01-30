import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Carrito</h1>
      <Link to={"/checkout"}>Finalizar compra</Link>
    </div>
  );
};

export default Cart;
