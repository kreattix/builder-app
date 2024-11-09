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
    <div className="container">
      <div className="logo">Kreattix Builder</div>
      <h2>Unleash Your Creativity with Kreattix.</h2>
      <p>
        Sign in or create a new account with your Google account. It's quick, secure, and
        hassle-free.
      </p>
      <button className="google-button" onClick={onLogin}>
        {isAuthenticating ? 'Loading' : 'Continue with Google'}
      </button>
      <p>
        New here? Click above to get started effortlessly with Google. Returning user?
        Welcome back!
      </p>
    </div>
  )
}
