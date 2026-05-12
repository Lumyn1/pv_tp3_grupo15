const proyectoService = (() => {

    // Arreglo privado de proyectos
    const proyectos = [
        { id: 1, titulo: "Sistema de Gestión", categoria: "Web", estado: true },
        { id: 2, titulo: "App Móvil Delivery", categoria: "Mobile", estado: false },
        { id: 3, titulo: "E-commerce Ropa", categoria: "Web", estado: true },
        { id: 4, titulo: "Análisis de Datos", categoria: "Data Science", estado: true },
        { id: 5, titulo: "Bot de Discord", categoria: "Herramientas", estado: true }
    ];

    const listarProyectos = () => {
        return [...proyectos];
    };

    return { 
        listarProyectos
    };

})();

export default proyectoService;