import { TokenResponse, useGoogleLogin } from '@react-oauth/google'

import { authenticateUser } from '../app/features/authentication/authenticationSlice'
import { useAppDispatch } from '../app/hooks'

export const CustomLogin = () => {
  const dispatch = useAppDispatch()
  const onSuccess = (response: TokenResponse) => {
    if (response.access_token) {
      dispatch(authenticateUser(response.access_token))
    } else {
      console.log('Failed to get credentials')
    }
  }

  const login = useGoogleLogin({ onSuccess })

  return <button onClick={() => login()}>Login with Google Account</button>
}
