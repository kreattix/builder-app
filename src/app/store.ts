import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer
} from 'redux-persist'
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authenticationReducer from './features/authentication/authenticationSlice'

const persistConfig = {
  key: 'kreattix-store',
  storage
}

const persistedAuthenticationReducer = persistReducer(
  persistConfig,
  authenticationReducer
)

export const store = configureStore({
  reducer: { auth: persistedAuthenticationReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
