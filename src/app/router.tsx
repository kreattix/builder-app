import { createBrowserRouter } from 'react-router-dom'

import { Authentication } from '../pages/Authentication'
import { Project } from '../pages/Project'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Authentication />
  },
  {
    path: '/projects',
    element: <Project />
  },
  {
    path: '*',
    element: <div>Not Found</div>
  }
])
