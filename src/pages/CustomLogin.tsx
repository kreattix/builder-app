import { TokenResponse, useGoogleLogin } from '@react-oauth/google'

import { authenticateUser } from '../app/features/authentication/authenticationSlice'
import { useAppDispatch, useAuthSelector } from '../app/hooks'

export const CustomLogin = () => {
  const dispatch = useAppDispatch()
  const { isAuthenticating } = useAuthSelector()
  const onSuccess = (response: TokenResponse) => {
    if (response.access_token) {
      dispatch(authenticateUser(response.access_token))
    } else {
      console.log('Failed to get credentials')
    }
  }

  const login = useGoogleLogin({ onSuccess })

  const onLogin = () => {
    if (!isAuthenticating) login()
  }

  return (
    <button onClick={onLogin}>
      {isAuthenticating ? 'Loading' : 'Login with Google Account'}
    </button>
  )
}
