import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { useParams, Link } from "react-router";
import "./itemDetail.css";
import Counter from "../../common/counter/Counter";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        let productSelected = collection(db, "products");
        let productRef = doc(productSelected, id);
        let res = await getDoc(productRef);
        if (res.exists()) {
          setItem({ ...res.data(), id: res.id });
        }
      } catch (error) {
        console.log("Error al obtener el producto:", error);
      }
    };
    getProduct();
  }, [id]);

  // Mostrar un mensaje de carga si aún no hay datos
  if (!item.id) return <p className="text-center mt-5">Cargando...</p>;

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
                  <div className="d-flex flex-column align-items-center mt-3">
                    <Counter item={item} />
                    <Link to="/" className="btn btn-secondary w-75 mt-3">
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
