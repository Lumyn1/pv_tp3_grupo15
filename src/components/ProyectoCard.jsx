const ProyectoCard = ({ proyecto, manejarEliminar, manejarVerDetalle }) => {
  const { titulo, categoria, estado, id } = proyecto;

  return (
    <article className="tarjeta">
      <h3>{titulo}</h3>

      <p>Categoría: {categoria}</p>

      <p>Estado: {estado ? "Activo" : "Inactivo"}</p>

      <div>
        <button className="boton-accion"
        onClick={manejarVerDetalle}>
          Ver Detalle
        </button> 

        <button className="boton-Eliminar" onClick={() => manejarEliminar(id)}>
          Eliminar
        </button>
      </div>
    </article>
  );
};

export default ProyectoCard;
