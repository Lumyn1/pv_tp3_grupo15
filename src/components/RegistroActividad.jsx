const RegistroActividad = ({ fecha }) => {
  return (
    <div className="registro-actividad">
      <h3>Registro de Actividad</h3>

      <p>
        Última modificación: {fecha}
      </p>
    </div>
  );
};

export default RegistroActividad;