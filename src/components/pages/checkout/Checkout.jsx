import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    tarjeta: "",
    vto: "",
    seg: "",
    mail: "",
  });
  const comprar = (event) => {
    event.preventDefault();
  };
  const capturarDatos = (event) => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div>
      <form onSubmit={comprar}>
        <input
          type="text"
          placeholder="Nombre completo"
          name="nombre"
          onChange={capturarDatos}
        />
        <input
          type="text"
          placeholder="Numero de tarjeta"
          name="tarjeta"
          onChange={capturarDatos}
        />
        <input
          type="text"
          placeholder="Vencimiento"
          name="vto"
          onChange={capturarDatos}
        />
        <input
          type="text"
          placeholder="Código de seguridad"
          name="seg"
          onChange={capturarDatos}
        />
        <input
          type="text"
          placeholder="Dirección de correo electrónico"
          name="mail"
          onChange={capturarDatos}
        />
        <button>Comprar</button>
      </form>
    </div>
  );
};
export default Checkout;
