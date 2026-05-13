const proyectoService = (() => {

    // Arreglo privado de proyectos
    const proyecto = [
        { id: 1, titulo: "Sistema de Gestión", categoria: "Web", estado: true },
        { id: 2, titulo: "App Móvil Delivery", categoria: "Mobile", estado: false },
        { id: 3, titulo: "E-commerce Ropa", categoria: "Web", estado: true },
        { id: 4, titulo: "Análisis de Datos", categoria: "Data Science", estado: true },
        { id: 5, titulo: "Bot de Discord", categoria: "Herramientas", estado: true }
    ];

    // Obtener copia del arreglo
    const listarProyectos = () => {
        return [...proyecto];
    };

    // Agregar proyecto
    const agregarProyecto = (nuevoProyecto) => {

        const copia = [...proyecto];

        copia.push(nuevoProyecto);

        proyecto.length = 0;

        proyecto.push(...copia);
    };

    // Buscar proyecto
    const buscarProyecto = (texto) => {

        const copia = [...proyecto];

        return copia.filter(proyecto =>
            proyecto.titulo.toLowerCase().includes(texto.toLowerCase())
        );
    };

    // Eliminar proyecto
    const eliminarProyecto = (id) => {

        const copia = [...proyecto];

        const nuevaLista = copia.filter(
            proyecto => proyecto.id !== id
        );

        proyecto.length = 0;

        proyecto.push(...nuevaLista);
    };

    return {
        listarProyectos,
        buscarProyecto,
        agregarProyecto,
        eliminarProyecto
    };

})();

export default proyectoService;