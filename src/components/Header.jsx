import { useContext } from 'react';
// 1. Importamos el contexto que creó tu compañero
import { UsuarioContext } from '../context/UsuarioContext'; 
// 2. Importamos los componentes de Material UI para la barra superior
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  // 3. Consumimos el estado global extrayendo el objeto "usuario"
  const { usuario } = useContext(UsuarioContext);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Título de la aplicación alineado a la izquierda */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gestión de Proyectos Educativos
        </Typography>
        
        {/* Contenedor para los datos del usuario alineados a la derecha */}
        <Box sx={{ textAlign: 'right' }}>
          {/* Mostramos el nombre del usuario dinámicamente */}
          <Typography variant="body1" fontWeight="bold">
            {usuario?.nombre ? usuario.nombre : 'Cargando usuario...'}
          </Typography>
          
          {/* Mostramos el rol del usuario dinámicamente */}
          <Typography variant="body2" color="inherit">
            Rol: {usuario?.rol ? usuario.rol : 'Sin rol'}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;