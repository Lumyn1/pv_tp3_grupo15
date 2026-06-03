const proyectoService = (() => {
  const proyectosIniciales = [
    { id: 1, titulo: "Sistema de Gestión", categoria: "Web", estado: true },
    { id: 2, titulo: "App Móvil Delivery", categoria: "Mobile", estado: true }, 
    { id: 3, titulo: "E-commerce Ropa", categoria: "Web", estado: true },
    { id: 4, titulo: "Análisis de Datos", categoria: "Data Science", estado: true },
    { id: 5, titulo: "Bot de Discord", categoria: "Herramientas", estado: true },
  ];

  let proyecto = JSON.parse(localStorage.getItem("proyectos_grupo15")) || proyectosIniciales;

  const guardarEnStorage = () => {
    localStorage.setItem("proyectos_grupo15", JSON.stringify(proyecto));
  };

  if (!localStorage.getItem("proyectos_grupo15")) {
    guardarEnStorage();
  }

  const listarProyectos = () => {
    return proyecto.filter((p) => p.estado);
  };

  const agregarProyecto = (nuevoProyecto) => {
    proyecto.push(nuevoProyecto);
    guardarEnStorage(); 
  };

  const buscarProyecto = (texto) => {
    return proyecto.filter(
      (p) =>
        p.estado &&
        p.titulo.toLowerCase().includes(texto.toLowerCase())
    );
  };

  const eliminarProyecto = (id) => {
    const proyectoEncontrado = proyecto.find((p) => p.id === id);
    if (proyectoEncontrado) {
      proyectoEncontrado.estado = false;
      guardarEnStorage(); 
    }
  };

  // --- LA FUNCIÓN NUEVA DE TU COMPAÑERO ---
  const getById = (id) => {
    return proyecto.find((p) => p.id === Number(id)); 
  }

  return {
    listarProyectos,
    buscarProyecto,
    agregarProyecto,
    eliminarProyecto,
    getById,  
  };
})();

export default proyectoService;