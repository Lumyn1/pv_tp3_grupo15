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

  return (
    <div className="registro-actividad">
      <h3>Registro de Actividad</h3>

      <p>
        Última actualización de la lista: {fechaFormateada} a las{" "}
        {horaFormateada}
        hs.
      </p>
    </div>
  );
};

export default RegistroActividad;
