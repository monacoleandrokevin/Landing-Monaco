import { Link } from "react-router";
import "./productCard.css";

export const ProductCard = ({
  imageUrl,
  title,
  price,
  description,
  id,
  stock,
}) => {
  return (
    <div className="card shadow-sm product-card" style={{ width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Stock:{stock}</p>
        <h5 className="card-subtitle mb-2 text-muted">${price}</h5>
        <Link to={`/detail/${id}`}>
          <button className="btn btn-primary">Ver detalle</button>
        </Link>
      </div>
    </div>
  );
};
