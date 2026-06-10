import { useState, useContext } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { UsuarioContext } from "../context/UsuarioContext";
import "../css/PerfilUsuario.css";

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);

  const [editando, setEditando] = useState(false);
  const [datosForm, setDatosForm] = useState({
    nombre: usuario.nombre,
    dni: usuario.dni,
    rol: usuario.rol,
    institucion: usuario.institucion,
  });

  const handleChange = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuardar = () => {
    actualizarPerfil(datosForm);
    setEditando(false);
  };

  return (
    <Container>
      <Paper elevation={3} className="perfil-paper" sx={{ p: 3, mt: 3 }}>
        <Typography variant="h4" className="perfil-titulo" gutterBottom>
          Perfil de Usuario
        </Typography>

        {editando ? (
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
          >
            <TextField
              label="Nombre"
              name="nombre"
              value={datosForm.nombre}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="DNI"
              name="dni"
              value={datosForm.dni}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Rol"
              name="rol"
              value={datosForm.rol}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Institución"
              name="institucion"
              value={datosForm.institucion}
              onChange={handleChange}
              fullWidth
            />

            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <Button
                variant="contained"
                color="success"
                onClick={handleGuardar}
              >
                Guardar Cambios
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setEditando(false)}
              >
                Cancelar
              </Button>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 2 }}
          >
            <Typography>
              <strong>Nombre:</strong> {usuario.nombre}
            </Typography>
            <Typography>
              <strong>DNI:</strong> {usuario.dni}
            </Typography>
            <Typography>
              <strong>Rol:</strong> {usuario.rol}
            </Typography>
            <Typography>
              <strong>Institución:</strong> {usuario.institucion}
            </Typography>

            <Button
              variant="contained"
              sx={{ mt: 2, alignSelf: "flex-start" }}
              onClick={() => setEditando(true)}
            >
              Editar Perfil
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default PerfilUsuario;
