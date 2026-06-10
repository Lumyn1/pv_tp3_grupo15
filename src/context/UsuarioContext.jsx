/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext(null);

export const UsuarioProvider = ({ children }) => {
  const usuarioGuardado = localStorage.getItem("usuario");
  const [usuario, setUsuario] = useState(
    usuarioGuardado
      ? JSON.parse(usuarioGuardado)
      : {
    nombre: "Juan Pérez",
    dni: "12345678",
    rol: "Alumno",
    institucion: "Universidad Nacional de Jujuy",
  });

  const actualizarPerfil = (nuevoUsuario) => {
    setUsuario(nuevoUsuario);
  };
  
  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);  

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