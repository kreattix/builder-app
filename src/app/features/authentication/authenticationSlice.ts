import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { api } from '../../api'
import { AuthenticatedUser, AuthenticationResponse, AuthenticationState } from './types'

export const initialState: AuthenticationState = {
  authenticatedUser: null,
  accessToken: null,
  tokenType: null
}

export const authenticateUser = createAsyncThunk<AuthenticationResponse, string>(
  'authenticateUser',
  (token) => api.post('login', { token })
)

export const getAuthenticatedUser = createAsyncThunk<AuthenticatedUser>(
  'getAuthenticatedUser',
  () => api.get('me')
)

const authenticationSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    signedOut(state) {
      Object.assign(state, initialState)
      api.defaults.headers.common.Authorization = undefined
    }
  },
  extraReducers(builder) {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.access_token
      state.tokenType = action.payload.token_type
      api.defaults.headers.common.Authorization = `${action.payload.token_type} ${action.payload.access_token}`
    })
    builder.addCase(authenticateUser.rejected, (state) => {
      Object.assign(state, initialState)
      api.defaults.headers.common.Authorization = undefined
    })
    builder.addCase(getAuthenticatedUser.fulfilled, (state, action) => {
      state.authenticatedUser = action.payload
    })
    builder.addCase(getAuthenticatedUser.rejected, (state) => {
      Object.assign(state, initialState)
      api.defaults.headers.common.Authorization = undefined
    })
  }
})

const authenticationReducer = authenticationSlice.reducer

export const { signedOut } = authenticationSlice.actions
export default authenticationReducer
