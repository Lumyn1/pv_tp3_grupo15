import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/dashboard" className="nav-enlace">
        Inicio
      </NavLink>
      <NavLink to="/proyectos" className="nav-enlace">
        Proyectos
      </NavLink>
      <NavLink to="/perfil" className="nav-enlace">
        Perfil
      </NavLink>
    </nav>
  );
};

export default Nav;
