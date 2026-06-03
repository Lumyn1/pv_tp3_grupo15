import { useState } from "react";
// 1. Importamos los componentes de Material UI
import { Box, TextField, Button, Typography } from "@mui/material";

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
    console.log("Nuevo proyecto a agregar:", nuevoProyecto);

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
    // 2. Box reemplaza al <form> tradicional
    <Box
      component="form"
      onSubmit={manejarSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2, // Espacio automático entre todos los inputs
        p: 3, // Padding interno
        boxShadow: 2, // Sombrita elegante
        borderRadius: 2, // Bordes redondeados
        bgcolor: "background.paper" // Fondo blanco
      }}
    >
      {/* 3. Typography reemplaza al <h3> */}
      <Typography variant="h5" component="h3" gutterBottom color="primary">
        Agregar Nuevo Proyecto
      </Typography>

      {/* 4. TextField reemplaza a los <input> */}
      <TextField
        label="Título del proyecto"
        name="titulo"
        value={formulario.titulo}
        onChange={manejarCambio}
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Categoría (ej. Web, Data)"
        name="categoria"
        value={formulario.categoria}
        onChange={manejarCambio}
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Descripción del proyecto"
        name="descripcion"
        value={formulario.descripcion}
        onChange={manejarCambio}
        variant="outlined"
        fullWidth
        multiline
        rows={2} // Lo hace más alto para que sea más cómodo escribir
      />

      <TextField
        label="Descripción adicional"
        name="descripcion2"
        value={formulario.descripcion2}
        onChange={manejarCambio}
        variant="outlined"
        fullWidth
        multiline
        rows={2}
      />

      <TextField
        label="Enlace al PDF"
        name="pdf"
        value={formulario.pdf}
        onChange={manejarCambio}
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Enlace al repositorio"
        name="repositorio"
        value={formulario.repositorio}
        onChange={manejarCambio}
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Enlace al Drive"
        name="drive"
        value={formulario.drive}
        onChange={manejarCambio}
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Miembros (separados por coma)"
        name="miembros"
        value={formulario.miembros}
        onChange={manejarCambio}
        variant="outlined"
        fullWidth
      />

      {/* 5. Button de MUI reemplaza al <button> de HTML */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 1 }}
      >
        Agregar Proyecto
      </Button>
    </Box>
  );
};

export default FormularioProyecto;