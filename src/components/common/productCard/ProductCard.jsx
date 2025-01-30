import { Link } from "react-router-dom";
import "./productCard.css";

export const ProductCard = ({ imageUrl, title, price, description, id }) => {
  return (
    <div className="card shadow-sm product-card" style={{ width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
        <p className="card-text">{description}</p>
        <Link to={`/detail/${id}`}>
          <button className="btn btn-primary">Ver detalle</button>
        </Link>
      </div>
    </div>
  );
};
