import { useState } from "react";
import "../css/App.css";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard";

const Proyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.listarProyectos());

  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
  });
  const { titulo, categoria } = formulario;

  const manejarEliminar = (id) => {
    proyectoService.eliminarProyecto(id);

    setProyectos(proyectoService.listarProyectos());
  };

  const manejarBusqueda = (evento) => {
    const textoIngresado = evento.target.value;

    setTextoBusqueda(textoIngresado);

    const proyectosFiltrados = proyectoService.buscarProyecto(textoIngresado);

    setProyectos(proyectosFiltrados);
  };

  const menejarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarAgregar = (evento) => {
    evento.preventDefault();

    if (titulo.trim() === "" || categoria.trim() === "") {
      alert("Por favor, completa el título y la categoría del proyecto.");

      return;
    }

    const nuevoProyecto = {
      id: Date.now(),

      titulo,

      categoria,

      estado: true,
    };

    proyectoService.agregarProyecto(nuevoProyecto);

    setProyectos(proyectoService.listarProyectos());

    setFormulario({ titulo: "", categoria: "" });
  };

  return (
    <div className="contenedor-vista-proyectos">
      <div className="seccion-formulario">
        <form onSubmit={manejarAgregar} className="formulario-agregar">
          <h3>Agregar Nuevo Proyecto</h3>

          <div className="grupo-inputs">
            <input
              type="text"
              name="titulo"
              placeholder="Título del proyecto..."
              value={titulo}
              onChange={menejarCambio}
              className="input-formulario"
            />

            <input
              type="text"
              name="categoria"
              placeholder="Categoría (ej. Web, Data)..."
              value={categoria}
              onChange={menejarCambio}
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
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            manejarEliminar={manejarEliminar}
          />
        ))}
      </section>
    </div>
  );
};

export default Proyectos;
