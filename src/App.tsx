import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { api } from './app/api'
import { getAuthenticatedUser } from './app/features/authentication/authenticationSlice'
import { useAppDispatch, useAuthSelector } from './app/hooks'
import { guardedRoutes, ungaurdedRoutes } from './app/router'
import { GlobalStyle, theme } from './config/theme'

const App = () => {
  const dispatch = useAppDispatch()
  const { accessToken, tokenType, authenticatedUser } = useAuthSelector()

  useEffect(() => {
    if (accessToken) {
      api.defaults.headers.common.Authorization = `${tokenType} ${accessToken}`
      dispatch(getAuthenticatedUser())
    }
  }, [accessToken, dispatch, tokenType])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={authenticatedUser ? guardedRoutes : ungaurdedRoutes} />
    </ThemeProvider>
  )
}

export default App
