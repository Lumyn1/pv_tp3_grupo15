import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";

const ProyectoCard = ({ proyecto, manejarEliminar, manejarVerDetalle }) => {
  const { titulo, categoria, estado, id } = proyecto;

  return (

    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div" gutterBottom>
          {titulo}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Categoría: {categoria}
        </Typography>

        <Typography variant="body2" color={estado ? "success.main" : "error.main"} sx={{ mt: 1, fontWeight: 'bold' }}>
          Estado: {estado ? "Activo" : "Inactivo"}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={manejarVerDetalle}>
          Ver Detalle
        </Button> 

        <Button size="small" variant="outlined" color="error" onClick={() => manejarEliminar(id)}>
          Eliminar
        </Button>
      </CardActions>

    </Card>
  );
};

export default ProyectoCard;