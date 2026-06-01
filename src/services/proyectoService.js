const proyectoService = (() => {
  // Arreglo privado de proyectos
  const proyecto = [
    { id: 1, titulo: "Sistema de Gestión", categoria: "Web", estado: true },
    { id: 2, titulo: "App Móvil Delivery", categoria: "Mobile", estado: false },
    { id: 3, titulo: "E-commerce Ropa", categoria: "Web", estado: true },
    {
      id: 4,
      titulo: "Análisis de Datos",
      categoria: "Data Science",
      estado: true,
    },
    {
      id: 5,
      titulo: "Bot de Discord",
      categoria: "Herramientas",
      estado: true,
    },
  ];

  // Obtener solo proyectos activos
  const listarProyectos = () => {
    return proyecto.filter((proyecto) => proyecto.estado);
  };

  // Agregar proyecto
  const agregarProyecto = (nuevoProyecto) => {
    proyecto.push(nuevoProyecto);
  };

  // Buscar proyecto entre los activos
  const buscarProyecto = (texto) => {
    return proyecto.filter(
      (proyecto) =>
        proyecto.estado &&
        proyecto.titulo.toLowerCase().includes(texto.toLowerCase())
    );
  };

  // Eliminar proyecto (cambiar estado a false)
  const eliminarProyecto = (id) => {
    const proyectoEncontrado = proyecto.find(
      (proyecto) => proyecto.id === id
    );

    if (proyectoEncontrado) {
      proyectoEncontrado.estado = false;
    }
  };

  return {
    listarProyectos,
    buscarProyecto,
    agregarProyecto,
    eliminarProyecto,
  };
})();

export default proyectoService;