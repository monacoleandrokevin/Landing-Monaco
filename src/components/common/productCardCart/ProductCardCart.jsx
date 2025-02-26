import "./productCardCart.css";

const ProductCardCart = ({ product, removeById }) => {
  return (
    <div className="card mb-3 shadow-sm product-card-cart">
      <div className="row g-0">
        {/* Imagen del producto */}
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img
            src={product.imageUrl}
            className="img-fluid rounded"
            alt={product.title}
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        </div>

        {/* Información del producto */}
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text text-success fw-bold">${product.price}</p>
            <p className="card-text">Cantidad: {product.quantity}</p>

            {/* Botón de eliminar */}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeById(product.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCart;
