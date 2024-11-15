import { createBrowserRouter } from 'react-router-dom'

import { PageLayout } from '../layouts/PageLayout'
import { Dashboard } from '../pages/Dashboard'
import { Project } from '../pages/Project'
import { SigninPage } from '../pages/SigninPage'

export const ungaurdedRoutes = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      { path: '/', element: <SigninPage /> },
      { path: '*', element: <div>Not Found</div> }
    ]
  }
])

export const guardedRoutes = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/project', element: <Project /> },
      { path: '*', element: <div>Not Found</div> }
    ]
  }
])
