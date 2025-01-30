import "./itemListContainer.css";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productsFiltered;
    if (name) {
      productsFiltered = products.filter(
        (element) => element.category === name
      );
    }
    const getProducts = new Promise((resolve, reject) => {
      resolve(!name ? products : productsFiltered);
      reject({ statusCode: 400, message: "Algo ha salido mal" });
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        setItems(error);
      });
  }, [name]);

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
