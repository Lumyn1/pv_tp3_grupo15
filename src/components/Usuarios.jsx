import "../css/App.css";
import usuariosService from "../services/usuariosService";


const Usuarios =() => {
     
     const usuariosLocales = usuariosService.listarTodosUsuarios();
     console.log(usuariosService.listarTodosUsuarios());



    return ( 
        <>
        <p> hola react </p>
        <section className= "contenedor-tarjetas">
        { usuariosLocales.map((usuarios)=> (
        <article className= "tarjeta" key={usuarios.id}>
             <h3>{usuarios.nombre}</h3>
            <p>{usuarios.apellido}</p>
            <a href="#" className= "boton-accion">Ver más</a>
        </article>
        ) )}
        </section>
     
     
        </>

    )
}

export default Usuarios;