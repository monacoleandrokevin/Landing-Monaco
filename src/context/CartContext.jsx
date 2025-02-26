import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let cantidadRealAgregada = 0;

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      const stockDisponible = product.stock - (existingProduct?.quantity || 0);

      cantidadRealAgregada = Math.min(product.quantity, stockDisponible);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + cantidadRealAgregada }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: cantidadRealAgregada }];
      }
    });

    return cantidadRealAgregada;
  };

  const removeCart = () => {
    setCart([]);
  };
  const removeById = (id) => {
    let newCart = cart.filter((element) => element.id !== id);
    setCart(newCart);
  };
  const getTotal = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.price * element.quantity;
    }, 0);
    return total;
  };
  const getTotalItems = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    removeCart,
    removeById,
    getTotal,
    getTotalItems,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
