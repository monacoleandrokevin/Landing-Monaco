import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import logo from "../../../assets/images/logo.webp";

const Checkout = () => {
  const { cart, getTotal, removeCart } = useContext(CartContext);
  const [ticketNumber, setTicketNumber] = useState(null);
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    tarjeta: "",
    vto: "",
    seg: "",
    mail: "",
  });

  const capturarDatos = (event) => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const comprar = async (event) => {
    event.preventDefault();
    let total = getTotal();
    let order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };

    try {
      // Guardar orden en Firestore
      let ordersCollection = collection(db, "orders");
      const res = await addDoc(ordersCollection, order);
      setTicketNumber(res.id);

      // Actualizar stock
      let productCollection = collection(db, "products");
      order.items.forEach(async (element) => {
        let refDoc = doc(productCollection, element.id);
        await updateDoc(refDoc, { stock: element.stock - element.quantity });
      });

      // Limpiar carrito
      removeCart();

      // Generar archivo de comprobante
      generarComprobante(res.id, userInfo, total);

      // SweetAlert con logo
      Swal.fire({
        title: "¡Compra realizada con éxito!",
        text: `Tu número de compra es: ${res.id}`,
        imageUrl: logo,
        imageWidth: 150,
        imageHeight: 150,
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Descargar comprobante",
        cancelButtonText: "Cerrar",
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
      }).then((result) => {
        if (result.isConfirmed) {
          descargarComprobante(res.id);
        }
      });
    } catch (error) {
      Swal.fire("Error", "Hubo un problema con la compra", "error");
      console.log(error);
    }
  };

  const generarComprobante = (id, userInfo, total) => {
    const contenido =
      `COMPROBANTE DE COMPRA - MEGANODE\n\n` +
      `Código de compra: ${id}\n` +
      `Cliente: ${userInfo.nombre}\n` +
      `Correo: ${userInfo.mail}\n` +
      `Total pagado: $${total}\n\n` +
      `¡Gracias por tu compra!`;

    const blob = new Blob([contenido], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    localStorage.setItem("comprobanteUrl", url);
  };

  const descargarComprobante = (id) => {
    const url = localStorage.getItem("comprobanteUrl");
    if (!url) return;

    const a = document.createElement("a");
    a.href = url;
    a.download = `comprobante_${id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Finalizar compra</h2>

      {ticketNumber ? (
        <div className="alert alert-success text-center">
          <h4>Tu comprobante es:</h4>
          <p className="fw-bold">{ticketNumber}</p>
        </div>
      ) : (
        <form onSubmit={comprar} className="card p-4 shadow">
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ej: Juan Pérez"
              name="nombre"
              onChange={capturarDatos}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Número de tarjeta</label>
            <input
              type="text"
              className="form-control"
              placeholder="1234 5678 9012 3456"
              name="tarjeta"
              onChange={capturarDatos}
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Vencimiento</label>
              <input
                type="text"
                className="form-control"
                placeholder="MM/AA"
                name="vto"
                onChange={capturarDatos}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Código de seguridad</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej: 123"
                name="seg"
                onChange={capturarDatos}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="tucorreo@ejemplo.com"
              name="mail"
              onChange={capturarDatos}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Confirmar compra
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
