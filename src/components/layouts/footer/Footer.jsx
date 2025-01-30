import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} MegaNode. Todos los derechos
          reservados.
        </p>
        <p className="small">Desarrollado por Leandro Kevin Monaco</p>
      </div>
    </footer>
  );
};
export default Footer;
