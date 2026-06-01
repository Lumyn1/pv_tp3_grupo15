import {
  Container,
  Typography,
  Card,
  CardContent,
  Box
} from "@mui/material";

import "../css/Dashboard.css";

const Dashboard = () => {
  return (
    <Container className="dashboard-container">

      <Typography
        variant="h3"
        align="center"
        className="dashboard-titulo"
      >
        Dashboard
      </Typography>

      <Typography
        align="center"
        className="dashboard-descripcion"
      >
        Bienvenido al sistema de gestión de proyectos educativos.
      </Typography>

      <Box className="dashboard-cards">

        <Card className="dashboard-card">
          <CardContent>
            <Typography variant="h6">
              Total de proyectos
            </Typography>

            <Typography variant="h2" className="dashboard-numero">
              12
            </Typography>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardContent>
            <Typography variant="h6">
              Proyectos en curso
            </Typography>

            <Typography variant="h2" className="dashboard-numero">
              5
            </Typography>
          </CardContent>
        </Card>

      </Box>

    </Container>
  );
};

export default Dashboard;