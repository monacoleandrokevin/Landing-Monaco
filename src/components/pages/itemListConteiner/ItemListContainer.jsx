import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import Spinner from "react-bootstrap/Spinner"; // Importamos el Spinner de Bootstrap

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let question = productsCollection;

    if (name) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", name)
      );
      question = productsCollectionFiltered;
    }

    const getProducts = getDocs(question);
    getProducts
      .then((res) => {
        const array = res.docs.map((element) => {
          return { id: element.id, ...element.data() };
        });
        setItems(array);
      })
      .catch((error) => console.log(error));
  }, [name]);

  // Mientras se cargan los productos, mostramos el Spinner de Bootstrap
  if (items.length === 0) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Spinner animation="border" variant="primary" />
        <h3 className="mt-3 text-primary">Cargando productos...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4 text-center">
      <h2>{props.mensaje}</h2>
      <div className="row justify-content-center">
        {items.map((element) => (
          <div
            key={element.id}
            className="col-12 col-md-3 d-flex justify-content-center"
          >
            <ProductCard {...element} />
          </div>
        ))}
      </div>
    </div>
  );
};
