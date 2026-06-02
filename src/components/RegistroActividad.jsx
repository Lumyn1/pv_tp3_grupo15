import { Snackbar, Alert } from "@mui/material";

const RegistroActividad = ({ fecha }) => {
  const fechaConvertida = new Date(fecha);

  const fechaFormateada = fechaConvertida.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const horaFormateada = fechaConvertida.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const mensajeTexto = `Última actualización de la lista: ${fechaFormateada} a las ${horaFormateada} hs.`;

  return (
    <Snackbar
      open={Boolean(fecha)}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity="info" variant="filled" sx={{ width: "100%" }}>
        {mensajeTexto}
      </Alert>
    </Snackbar>
  );
};

export default RegistroActividad;