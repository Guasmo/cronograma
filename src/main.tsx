import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DiagramaGantt from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DiagramaGantt />
  </StrictMode>,
)
