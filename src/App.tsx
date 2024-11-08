import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { getAuthenticatedUser } from './app/features/authentication/authenticationSlice'
import { useAppDispatch, useAuthSelector } from './app/hooks'
import { guardedRoutes, ungaurdedRoutes } from './app/router'

const App = () => {
  const dispatch = useAppDispatch()
  const { accessToken, authenticatedUser } = useAuthSelector()

  useEffect(() => {
    if (accessToken) {
      dispatch(getAuthenticatedUser())
    }
  }, [accessToken, dispatch])

  return <RouterProvider router={authenticatedUser ? guardedRoutes : ungaurdedRoutes} />
}

export default App
