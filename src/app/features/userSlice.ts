import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface User {
  id: string
  firstName: string
  lastName: string
  fullName: string
  email: string
}

export interface UserState {
  user: User | null
  sessionExpiry: number | null
  accessToken: string | null
}

const initialState: UserState = {
  user: {
    id: '1',
    firstName: 'Prince',
    lastName: 'Patel',
    fullName: 'Prince Patel',
    email: 'prince@gmail.com'
  },
  sessionExpiry: null,
  accessToken: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SignedIn(state, action: PayloadAction<User>) {
      state.user = action.payload
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
