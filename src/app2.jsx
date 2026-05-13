import Header from "./components/Header";
import Nav from "./components/Nav";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";

import "./css/App.css";

const App2 = () => { 

     console.log("hola mundo");

     return (

        <div>

            <Header />

            <Nav />

            <h1>Grupo 15</h1>

            <Proyectos />
            
            <Footer />


        </div>

     );    

}

export default App2;