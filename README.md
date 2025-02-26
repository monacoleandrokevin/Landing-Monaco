# MegaNode

MegaNode es una aplicación web de e-commerce para una tienda de tecnología. La aplicación ofrece una experiencia completa de compra, que incluye listado de productos, detalles de cada producto, carrito de compras y un proceso de checkout con generación de comprobante. El proyecto utiliza React, Firebase, Bootstrap y SweetAlert2 para brindar una experiencia de usuario moderna, responsiva y amigable.

## Características

- **Listado de Productos:**  
  Visualización de productos en una cuadrícula responsiva, con filtros por categoría (ej. PC de Escritorio, Notebooks, etc.).

- **Detalle del Producto:**  
  Cada producto cuenta con una vista detallada donde el usuario puede seleccionar la cantidad (respetando el stock) y agregarlo al carrito.

- **Carrito de Compras:**  
  Se muestra un resumen de los productos agregados, con opciones para eliminar productos individualmente o vaciar el carrito completo. El total de la compra se actualiza dinámicamente.

- **Checkout y Orden de Compra:**  
  Formulario de checkout que recopila datos del usuario (nombre, tarjeta, vencimiento, código de seguridad y correo electrónico).  
  Al finalizar la compra, se genera un comprobante con un código de compra, se actualiza el stock en Firebase y se muestra un SweetAlert con opción de descargar el comprobante y continuar navegando.

- **Navegación Responsive:**  
  Navbar con logo, enlaces de navegación y un widget de carrito que se adapta a pantallas móviles y de escritorio.  
  En móvil, el menú se colapsa en un botón de hamburguesa y el carrito se muestra junto a este botón.

- **Alertas y Notificaciones:**  
  Uso de SweetAlert2 para confirmar acciones importantes como agregar productos al carrito o finalizar la compra, incluyendo mensajes personalizados y visuales atractivos (por ejemplo, mostrando el logo de MegaNode).

## Tecnologías Utilizadas

- **React:** Librería para construir interfaces de usuario.
- **React Router:** Para la navegación y el enrutado en el lado del cliente.
- **Firebase:** Firestore para el almacenamiento de productos, órdenes y gestión de stock.
- **Bootstrap y React Bootstrap:** Para un diseño responsivo y componentes preestilizados.
- **SweetAlert2:** Para mostrar alertas y confirmaciones de manera elegante.

## Deployment

- [Vercel](https://landing-monaco.vercel.app/)
