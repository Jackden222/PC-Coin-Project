import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes.jsx'
import { GameProvider } from './GameContext' // Добавьте этот импорт

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameProvider> 
      <RouterProvider router={MainRoutes}/>
    </GameProvider>
  </StrictMode>,
)