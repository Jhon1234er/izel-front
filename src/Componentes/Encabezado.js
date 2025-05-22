import '../estilos/Encabezado.css';
import { Link } from 'react-router-dom';

export function Encabezado() {
  return (
    <header className="encabezado">
      <h1>Izel</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/login">Iniciar Sesión</Link>
      </nav>
    </header>
  );
}
