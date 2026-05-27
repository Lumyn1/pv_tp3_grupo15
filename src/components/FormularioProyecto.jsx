import { useState } from "react";

// callback del padre
const FormularioProyecto = ({ onAgregarProyecto }) => {
  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    descripcion: "",
    descripcion2: "",
    pdf: "",
    repositorio: "",
    drive: "",
    miembros: "",
  });

  
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  
  const manejarSubmit = (evento) => {
    evento.preventDefault();

    if (formulario.titulo.trim() === "" || formulario.categoria.trim() === "") {
      alert("Por favor, completa el título y la categoría del proyecto.");
      return;
    }

    const nuevoProyecto = {
      id: Date.now(),
      titulo: formulario.titulo,
      categoria: formulario.categoria,
      estado: true,
      descripcion: formulario.descripcion,
      descripcion2: formulario.descripcion2,
      recursos: {
        pdf: formulario.pdf,
        repositorio: formulario.repositorio,
        drive: formulario.drive,
      },
      miembros: formulario.miembros.split(",").map((m) => m.trim()),
    };

    onAgregarProyecto(nuevoProyecto);

    // Reset formulario
    setFormulario({
      titulo: "",
      categoria: "",
      descripcion: "",
      descripcion2: "",
      pdf: "",
      repositorio: "",
      drive: "",
      miembros: "",
    });
  };

  return (
    <form onSubmit={manejarSubmit} className="formulario-agregar">
      <h3>Agregar Nuevo Proyecto</h3>
      <div className="grupo-inputs">
        <input
          type="text"
          name="titulo"
          placeholder="Título del proyecto..."
          value={formulario.titulo}
          onChange={manejarCambio}
          className="input-formulario"
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoría (ej. Web, Data)..."
          value={formulario.categoria}
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
        <button type="submit" className="boton-accion">Agregar</button>
      </div>
    </form>
  );
};

export default FormularioProyecto;