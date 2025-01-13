import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListConteiner/ItemListContainer";
import { Footer } from "./components/layouts/footer/Footer";

function App() {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContainer mensaje="Bienvenidos a MegaNode, Tu tienda de tecnología favorita" />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;
