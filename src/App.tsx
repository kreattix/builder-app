import { RouterProvider } from 'react-router-dom'

import { useUserSelector } from './app/hooks'
import { router } from './app/router'
import { Authentication } from './pages/Authentication'

const App = () => {
  const { user } = useUserSelector()
  if (user) {
    return <RouterProvider router={router} />
  } else {
    return <Authentication />
  }
}

export default App
