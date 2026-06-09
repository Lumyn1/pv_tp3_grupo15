/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const UsuarioContext = createContext(null);

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: "Juan Pérez",
    dni: "12345678",
    rol: "Alumno",
    institucion: "Universidad Nacional de Jujuy",
  });

  const actualizarPerfil = (nuevoUsuario) => {
    setUsuario(nuevoUsuario);
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        actualizarPerfil,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};