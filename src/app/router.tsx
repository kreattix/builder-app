import { createBrowserRouter } from 'react-router-dom'

import { CustomLogin } from '../pages/CustomLogin'
import { Project } from '../pages/Project'

export const ungaurdedRoutes = createBrowserRouter([
  { path: '/', element: <CustomLogin /> },
  { path: '*', element: <div>Not Found</div> }
])

export const guardedRoutes = createBrowserRouter([
  { path: '/', element: <Project /> },
  { path: '*', element: <div>Not Found</div> }
])
