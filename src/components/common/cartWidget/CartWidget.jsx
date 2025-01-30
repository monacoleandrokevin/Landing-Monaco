import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const cartItemCount = 3; // A futuro pondre el contador aca

  return (
    <div className="position-relative">
      <Link to="/cart">
        <BsCart />
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ fontSize: "0.75rem" }}
        >
          {cartItemCount}
        </span>
      </Link>
    </div>
  );
};
