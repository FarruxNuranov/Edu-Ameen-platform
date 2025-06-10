
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import './Styles/main.scss'


createRoot(document.getElementById('root')).render(
  
<RouterProvider router={router} />
)
