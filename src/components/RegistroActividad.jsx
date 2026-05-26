const RegistroActividad = ({ fecha }) => {

  const fechaConvertida = new Date(fecha);

  const fechaFormateada = fechaConvertida.toLocaleDateString();

  const horaFormateada = fechaConvertida.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="registro-actividad">

      <h3>Registro de Actividad</h3>

      <p>
        Última actualización de la lista:
        {" "}
        {fechaFormateada}
        {" "}a las{" "}
        {horaFormateada}
        hs.
      </p>

    </div>
  );
};

export default RegistroActividad;