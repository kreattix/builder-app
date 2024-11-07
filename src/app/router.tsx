import { createBrowserRouter } from 'react-router-dom'

import { Project } from '../pages/Project'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Project />
  },
  {
    path: '*',
    element: <div>Not Found</div>
  }
])
