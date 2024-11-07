import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { JwtToken } from '../../pages/Authentication'

export interface User {
  firstName: string
  lastName: string
  fullName: string
  email: string
  profile: string
}

export interface UserState {
  user: User | null
  sessionExpiry: number | null
  accessToken: string | null
}

const initialState: UserState = {
  user: null,
  sessionExpiry: null,
  accessToken: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SignedIn(state, action: PayloadAction<JwtToken>) {
      state.user = {
        email: action.payload.email,
        fullName: action.payload.name,
        firstName: action.payload.given_name,
        lastName: action.payload.family_name,
        profile: action.payload.picture
      }
      state.sessionExpiry = action.payload.exp * 1000
    },
    SignedOut(state) {
      state.user = null
      state.sessionExpiry = null
      state.accessToken = null
    }
  }
})

const userReducer = userSlice.reducer

export const { SignedIn, SignedOut } = userSlice.actions
export default userReducer
