import { Container, Paper, Typography } from "@mui/material";
import "../css/PerfilUsuario.css";

const PerfilUsuario = () => {
  return (
    <Container>
      <Paper elevation={3} className="perfil-paper">
        <Typography variant="h4" className="perfil-titulo">
          Perfil de Usuario
        </Typography>

        <Typography>
          <strong>Nombre:</strong> Juan Pérez
        </Typography>

        <Typography>
          <strong>Rol:</strong> Estudiante
        </Typography>

        <Typography>
          <strong>Institución:</strong> Universidad Nacional de Jujuy
        </Typography>
      </Paper>
    </Container>
  );
};

export default PerfilUsuario;