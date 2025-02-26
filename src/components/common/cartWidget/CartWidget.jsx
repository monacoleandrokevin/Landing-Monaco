import { BsCart } from "react-icons/bs";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();

  return (
    <div className="position-relative">
      <Link to="/cart">
        <BsCart />
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ fontSize: "0.75rem" }}
        >
          {total}
        </span>
      </Link>
    </div>
  );
};
