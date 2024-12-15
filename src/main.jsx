import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import Context from './Context-API/Context';
import DarkMode from './Context-API/DarkMode';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <DarkMode>
    <Context>
    <App />
    </Context>
    </DarkMode>
  </StrictMode>,
  </BrowserRouter>
  
)
