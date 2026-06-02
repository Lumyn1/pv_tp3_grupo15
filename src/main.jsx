import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/index.css' 

// 1. Importamos las herramientas de tema de Material UI
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

// 2. Creamos el tema y le decimos explícitamente que sea oscuro
const temaOscuro = createTheme({
  palette: {
    mode: 'dark', 
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={temaOscuro}>
      {/* CssBaseline adapta el fondo base para que no queden parches blancos */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)