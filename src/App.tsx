import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { getAuthenticatedUser } from './app/features/authentication/authenticationSlice'
import { useAppDispatch, useAuthSelector } from './app/hooks'
import { router } from './app/router'
import { CustomLogin } from './pages/CustomLogin'

const App = () => {
  const dispatch = useAppDispatch()
  const { accessToken, authenticatedUser } = useAuthSelector()

  useEffect(() => {
    if (accessToken) {
      dispatch(getAuthenticatedUser())
    }
  }, [accessToken, dispatch])

  if (accessToken) {
    if (authenticatedUser) {
      return <RouterProvider router={router} />
    } else {
      return <div>Loading</div>
    }
  } else {
    return <CustomLogin />
  }
}

export default App
