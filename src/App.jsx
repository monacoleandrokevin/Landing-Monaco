import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListConteiner/ItemListContainer";
import { Footer } from "./components/layouts/footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/cart/Cart";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Checkout from "./components/pages/checkout/Checkout";

function App() {
  return (
    <div id="root">
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer mensaje="Bienvenidos a MegaNode, Tu tienda de tecnología favorita" />
              }
            />
            <Route
              path="/category/:name"
              element={
                <ItemListContainer mensaje="Bienvenidos a MegaNode, Tu tienda de tecnología favorita" />
              }
            />
            <Route path="/detail/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 Not found</h1>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
