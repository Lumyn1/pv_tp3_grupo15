import { useState } from "react";
import "../css/App.css";
import proyectoService from "../services/proyectoService";

const Proyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.listarProyectos());
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const manejarEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.listarProyectos());
  };
  const manejarBusqueda = (evento) => {
    const textoIngresado = evento.target.value;
    setTextoBusqueda(textoIngresado);

    const proyectosFiltrados = proyectoService.buscarProyecto(textoBusqueda);
    setProyectos(proyectosFiltrados);
  };
  const manejarAgregar = (evento) => {
    evento.preventDefault();

    if (titulo.trim() === "" || categoria.trim() === "") {
      alert("Por favor, completa el título y la categoría del proyecto.");
      return;
    }
    const nuevoProyecto = {
      id: Date.now(),
      titulo: titulo,
      categoria: categoria,
      estado: true,
    };
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.listarProyectos());
    setTitulo("");
    setCategoria("");
  };

  return (
    <div className="contenedor-vista-proyectos">
      <div className="seccion-formulario">
        <form onSubmit={manejarAgregar} className="formulario-agregar">
          <h3>Agregar Nuevo Proyecto</h3>
          <div className="grupo-inputs">
            <input
              type="text"
              placeholder="Título del proyecto..."
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="input-formulario"
            />
            <input
              type="text"
              placeholder="Categoría (ej. Web, Data)..."
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="input-formulario"
            />

            <button type="submit" className="boton-accion">
              Agregar
            </button>
          </div>
        </form>
      </div>
      <div className="seccion-buscador">
        <input
          type="text"
          placeholder="Buscar proyecto por titulo..."
          value={textoBusqueda}
          onChange={manejarBusqueda}
          className="input-buscador"
        />
      </div>

      <section className="contenedor-tarjetas">
        {proyectos.map((proyecto) => (
          <article className="tarjeta" key={proyecto.id}>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.categoria}</p>
            <p>Estado: {proyecto.estado ? "Activo" : "Inactivo"}</p>
            <button
              className="boton-accion"
              onClick={() => manejarEliminar(proyecto.id)}
            >
              Eliminar
            </button>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Proyectos;
