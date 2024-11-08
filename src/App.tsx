import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { api } from './app/api'
import { getAuthenticatedUser } from './app/features/authentication/authenticationSlice'
import { useAppDispatch, useAuthSelector } from './app/hooks'
import { guardedRoutes, ungaurdedRoutes } from './app/router'

const App = () => {
  const dispatch = useAppDispatch()
  const { accessToken, tokenType, authenticatedUser } = useAuthSelector()

  useEffect(() => {
    if (accessToken) {
      api.defaults.headers.common.Authorization = `${tokenType} ${accessToken}`
      dispatch(getAuthenticatedUser())
    }
  }, [accessToken, dispatch, tokenType])

  return <RouterProvider router={authenticatedUser ? guardedRoutes : ungaurdedRoutes} />
}

export default App
