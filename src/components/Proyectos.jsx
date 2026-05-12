import "../css/App.css";
import proyectoService from "../services/proyectoService";

const Proyectos = () => {
     
     const listaDeProyectos = proyectoService.listarProyectos();
     console.log(listaDeProyectos);

    return ( 
        <>
        <p> hola react </p>
        <section className="contenedor-tarjetas">
        { listaDeProyectos.map((proyecto) => (
        <article className="tarjeta" key={proyecto.id}>
             <h3>{proyecto.titulo}</h3>
            <p>{proyecto.categoria}</p>
            <p>Estado: {proyecto.estado ? "Activo" : "Inactivo"}</p>
            <a href="#" className="boton-accion">Ver más</a>
        </article>
        ) )}
        </section>
        </>
    )
}

export default Proyectos;