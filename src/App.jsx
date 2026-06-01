import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";
import PerfilUsuario from "./views/PerfilUsuario";
import "./css/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <h1>Grupo 15</h1>

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/proyectos/" element={<Proyectos />} />
        <Route path="/proyectos/:id" element={<h2>Detalles del Proyecto</h2>} />
        <Route path="/perfil" element={<PerfilUsuario />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;