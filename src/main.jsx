import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/index.css";
//import App from './App.jsx'
import App2 from './app2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
