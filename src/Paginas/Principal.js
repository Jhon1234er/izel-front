import '../estilos/Principal.css';

export function Principal() {
  return (
    <div className="home-container">
      <section className="bienvenida">
        <h1>Bienvenido a Izel</h1>
        <p>Tu portal confiable para gestión hospitalaria.</p>
      </section>

      <section className="contenido">
        <div className="card">
          <h2>Agendamiento de citas</h2>
          <p>Consulta disponibilidad y gestiona tus citas fácilmente.</p>
        </div>
        <div className="card">
          <h2>Historias clínicas</h2>
          <p>Accede y registra información médica de forma segura.</p>
        </div>
        <div className="card">
          <h2>Soporte al usuario</h2>
          <p>Contáctanos para resolver cualquier duda o inconveniente.</p>
        </div>
      </section>
    </div>
  );
}
