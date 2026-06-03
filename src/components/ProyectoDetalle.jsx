import {useParams} from "react-router-dom";
import proyectoService from "../services/proyectoService";

const ProyectoDetalle = () => {
  const { id } = useParams();
  const proyecto = proyectoService.getById(id); 
  console.log("ID desde URL:", id);
  console.log("Proyecto obtenido:", proyecto);  

  if (!proyecto) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="detalle-proyecto">
      <h2>{proyecto.titulo}</h2>
      <p>{proyecto.descripcion}</p>
        <p>{proyecto.descripcion2}</p>  

      <h4>Recursos:</h4>
      <ul>
        {proyecto.recursos?.pdf && <li><a href={proyecto.recursos.pdf}>PDF</a></li>}
        {proyecto.recursos?.repositorio && <li><a href={proyecto.recursos.repositorio}>Repositorio</a></li>}
        {proyecto.recursos?.drive && <li><a href={proyecto.recursos.drive}>Drive</a></li>}
      </ul>

      <h4>Miembros:</h4>
      <ul>
        {proyecto.miembros?.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  );
};

export default ProyectoDetalle;