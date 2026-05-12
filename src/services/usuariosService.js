const usuariosService = (()=> {

    //array de usuarios
    const usuarios =[
        {id: 1, nombre: "usuario1", apellido: "apellido1", estado: true },
        {id: 2, nombre: "usuario2", apellido: "apellido2", estado: false },
        {id: 3, nombre: "usuario3", apellido: "apellido3", estado: true },    
        {id: 4, nombre: "usuario4", apellido: "apellido4", estado: true },
        {id: 5, nombre: "usuario5", apellido: "apellido5", estado: true },
        ];

    const listarTodosUsuarios = () => {

        return [...usuarios];
        
    };

    return { 
        listarTodosUsuarios
    };


} )();

export default usuariosService;
