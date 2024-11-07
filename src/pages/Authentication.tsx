import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { JwtPayload, jwtDecode } from 'jwt-decode'

import { SignedIn } from '../app/features/userSlice'
import { useAppDispatch } from '../app/hooks'

export interface JwtToken extends JwtPayload {
  name: string
  given_name: string
  family_name: string
  email: string
  picture: string
  exp: number
}

export const Authentication = () => {
  const dispatch = useAppDispatch()
  const onSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const user = jwtDecode(credentialResponse.credential) as JwtToken
      dispatch(SignedIn(user))
    } else {
      console.log('Failed to get credentials')
    }
  }
  const onError = () => {
    console.log('Login Failed')
  }

  return (
    <GoogleLogin
      size="large"
      shape="pill"
      onSuccess={onSuccess}
      onError={onError}
      useOneTap
    />
  )
}
