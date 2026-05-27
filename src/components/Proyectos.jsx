import { useState, useEffect, useRef } from "react";
import "../css/App.css";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard";
import ProyectoDetalle from "./ProyectoDetalle";
import RegistroActividad from "./RegistroActividad";
import FormularioProyecto from "./FormularioProyecto"; 

const Proyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.listarProyectos());

  const [textoBusqueda, setTextoBusqueda] = useState("");

  const [ultimaActividad, setUltimaActividad] = useState("");

  // const [formulario, setFormulario] = useState({
  //   titulo: "",
  //   categoria: "",
  //   descripcion: "",
  //   descripcion2: "",
  //   pdf: "",
  //   repositorio: "",
  //   drive: "",
  //   miembros: "",
  // });

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const primeraVez = useRef(true);
  const [contadorOperaciones, setContadorOperaciones] = useState(0);

  // const { titulo, categoria } = formulario;

  // IMPLEMENTACIÓN DEL PUNTO 2 y punto 4
  useEffect(() => {
    if (primeraVez.current === true) {
      primeraVez.current = false;
      return;
    }

    // Captura la fecha y hora actual del sistema
    const fechaActual = new Date();

    // Guarda la fecha en el estado
    setUltimaActividad(fechaActual);
  }, [contadorOperaciones]);

  const manejarEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.listarProyectos());
    setContadorOperaciones((prev) => prev + 1);
  };

  const manejarBusqueda = (evento) => {
    const textoIngresado = evento.target.value;
    setTextoBusqueda(textoIngresado);

    const proyectosFiltrados = proyectoService.buscarProyecto(textoIngresado);
    setProyectos(proyectosFiltrados);
  };

  // const manejarCambio = (evento) => {
  //   const { name, value } = evento.target;
  //   setFormulario({
  //     ...formulario,
  //     [name]: value,
  //   });
  // };
const manejarAgregar = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.listarProyectos());
    setContadorOperaciones((prev) => prev + 1);
  }; 
  // const manejarAgregar = (evento) => {
  //   evento.preventDefault();

  //   if (titulo.trim() === "" || categoria.trim() === "") {
  //     alert("Por favor, completa el título y la categoría del proyecto.");
  //     return;
  //   }

  //   const nuevoProyecto = {
  //     id: Date.now(),
  //     titulo,
  //     categoria,
  //     estado: true,
  //     descripcion: formulario.descripcion,
  //     descripcion2: formulario.descripcion2,
  //     recursos: {
  //       pdf: formulario.pdf,
  //       repositorio: formulario.repositorio,
  //       drive: formulario.drive,
  //     },
  //     miembros: formulario.miembros.split(",").map((m) => m.trim()),
  //   };

  //   proyectoService.agregarProyecto(nuevoProyecto);
  //   setProyectos(proyectoService.listarProyectos());

  //   setFormulario({
  //     titulo: "",
  //     categoria: "",
  //     descripcion: "",
  //     descripcion2: "",
  //     pdf: "",
  //     repositorio: "",
  //     drive: "",
  //     miembros: "",
  //   });
  //   setContadorOperaciones((prev) => prev + 1);
  // };

  return (
    <div className="contenedor-vista-proyectos">
      <div className="seccion-formulario">
        <FormularioProyecto onAgregarProyecto={manejarAgregar} /> 
         {/* <form onSubmit={manejarAgregar} className="formulario-agregar">
          <h3>Agregar Nuevo Proyecto</h3>

          <div className="grupo-inputs">
            <input
              type="text"
              name="titulo"
              placeholder="Título del proyecto..."
              value={titulo}
              onChange={manejarCambio}
              className="input-formulario"
            />

            <input
              type="text"
              name="categoria"
              placeholder="Categoría (ej. Web, Data)..."
              value={categoria}
              onChange={manejarCambio}
              className="input-formulario"
            />

            <input
              type="text"
              name="descripcion"
              placeholder="Descripción del proyecto..."
              value={formulario.descripcion}
              onChange={manejarCambio}
              className="input-formulario"
            />

            <input
              type="text"
              name="descripcion2"
              placeholder="Descripción adicional..."
              value={formulario.descripcion2}
              onChange={manejarCambio}
              className="input-formulario"
            />

            <input
              type="text"
              name="pdf"
              placeholder="Enlace al PDF..."
              value={formulario.pdf}
              onChange={manejarCambio}
              className="input-formulario"
            />

            <input
              type="text"
              name="repositorio"
              placeholder="Enlace al repositorio..."
              value={formulario.repositorio}
              onChange={manejarCambio}
              className="input-formulario"
            />

            <input
              type="text"
              name="drive"
              placeholder="Enlace al Drive..."
              value={formulario.drive}
              onChange={manejarCambio}
              className="input-formulario"
            />

            <input
              type="text"
              name="miembros"
              placeholder="Miembros separados por coma..."
              value={formulario.miembros}
              onChange={manejarCambio}
              className="input-formulario"
            />

            <button type="submit" className="boton-accion">
              Agregar
            </button>
          </div>
        </form> */}
      </div>

      <div className="seccion-buscador">
        <input
          type="text"
          placeholder="Buscar proyecto por título..."
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
            manejarVerDetalle={() => setProyectoSeleccionado(proyecto)}
          />
        ))}
      </section>

      {proyectoSeleccionado && (
        <ProyectoDetalle proyecto={proyectoSeleccionado} />
      )}
      {ultimaActividad && <RegistroActividad fecha={ultimaActividad} />}
    </div>
  );
};

export default Proyectos;
