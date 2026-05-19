const ProyectoCard = ({ proyecto }) => {

    const { titulo, categoria, estado, id } = proyecto;

    return (

        <article className="tarjeta">

            <h3>{titulo}</h3>

            <p>Categoría: {categoria}</p>

            <p>
                Estado: {estado ? "Activo" : "Inactivo"}
            </p>

            <div>

                <button className="boton-accion">
                    Ver detalle
                </button>

                <button className="boton-eliminar">
                    Eliminar
                </button>

            </div>

        </article>

    );

};

export default ProyectoCard;