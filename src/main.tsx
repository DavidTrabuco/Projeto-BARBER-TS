import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore
import './styles/main.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
