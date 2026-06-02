import { useState, useEffect, useRef } from "react";
import "../css/App.css"; 
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard";
import ProyectoDetalle from "./ProyectoDetalle";
import RegistroActividad from "./RegistroActividad";
import FormularioProyecto from "./FormularioProyecto"; 

import { Container, Grid, TextField, Box } from "@mui/material";

const Proyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.listarProyectos());
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [ultimaActividad, setUltimaActividad] = useState("");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const primeraVez = useRef(true);
  const [contadorOperaciones, setContadorOperaciones] = useState(0);

  useEffect(() => {
    if (primeraVez.current === true) {
      primeraVez.current = false;
      return;
    }
    const fechaActual = new Date();
    setUltimaActividad(fechaActual);
  }, [contadorOperaciones]);

  const manejarEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.listarProyectos());
    setContadorOperaciones((prev) => prev + 1);
  };

  const manejarBusqueda = (evento) => {
    const textoIngresado = evento.target.value;
    setTextoBusqueda(textoIngresado);
    const proyectosFiltrados = proyectoService.buscarProyecto(textoIngresado);
    setProyectos(proyectosFiltrados);
  };

  const manejarAgregar = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.listarProyectos());
    setContadorOperaciones((prev) => prev + 1);
  }; 

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        mt: 4, 
        mb: 8, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}
    >
      
      <Box sx={{ width: '100%', maxWidth: '600px', mb: 4 }}>
        <FormularioProyecto onAgregarProyecto={manejarAgregar} /> 
      </Box>

      <Box sx={{ width: '100%', maxWidth: '600px', mb: 5 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Buscar proyecto por título..."
          value={textoBusqueda}
          onChange={manejarBusqueda}
        />
      </Box>


      <Box sx={{ width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'center' }}>
        <Grid 
          container 
          spacing={4} 
          sx={{ justifyContent: 'center' }} 
          alignItems="stretch"
        >
          {proyectos.map((proyecto) => (
            <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
              <ProyectoCard
                proyecto={proyecto}
                manejarEliminar={manejarEliminar}
                manejarVerDetalle={() => setProyectoSeleccionado(proyecto)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {proyectoSeleccionado && (
        <ProyectoDetalle proyecto={proyectoSeleccionado} />
      )}
      
      {ultimaActividad && <RegistroActividad fecha={ultimaActividad} />}
      
    </Container>
  );
};

export default Proyectos;