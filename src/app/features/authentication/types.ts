export interface AuthenticationResponse {
  access_token: string
  token_type: string
  expires_in: number
}

export interface AuthenticatedUser {
  id: number
  firstname: string
  lastname: string
  name: string
  email: string
  google_id: string
}

export interface AuthenticationState {
  authenticatedUser: AuthenticatedUser | null
  accessToken: string | null
  tokenType: string | null
}
