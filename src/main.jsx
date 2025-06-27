import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router'
import FirebaseContext from './Context/FirebaseContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext>
    <RouterProvider router={router}>
    </RouterProvider>
    </FirebaseContext>
  </StrictMode>,
)
