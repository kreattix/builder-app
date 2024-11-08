import { useNavigate } from 'react-router-dom'

import { signedOut } from '../app/features/authentication/authenticationSlice'
import { useAppDispatch, useAuthSelector } from '../app/hooks'

export const Project = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { authenticatedUser } = useAuthSelector()
  return (
    <div>
      Project {authenticatedUser?.name}
      <img src={authenticatedUser?.picture} alt="" referrerPolicy="no-referrer" />
      <button
        onClick={() => {
          dispatch(signedOut())
          navigate('/')
        }}
      >
        Logout
      </button>
    </div>
  )
}
