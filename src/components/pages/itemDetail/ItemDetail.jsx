import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./itemDetail.css";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productSelected = products.find((product) => product.id === id);
    setItem(productSelected);
  }, [id]);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card item-detail-card shadow-lg p-4">
            <div className="row g-0">
              {/* Columna de la imagen */}
              <div className="col-md-6 text-center">
                <img
                  src={item.imageUrl}
                  className="img-fluid rounded"
                  alt={item.title}
                />
              </div>

              {/* Columna de la información */}
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="card-body text-center">
                  <h2 className="card-title fw-bold">{item.title}</h2>
                  <h4 className="text-success">${item.price}</h4>
                  <p className="card-text">{item.description}</p>

                  {/* Contenedor de botones alineados */}
                  <div className="d-flex gap-3 mt-3 justify-content-center">
                    <button className="btn btn-primary w-50">
                      Agregar al Carrito
                    </button>
                    <Link to="/" className="btn btn-secondary w-50">
                      Volver
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
