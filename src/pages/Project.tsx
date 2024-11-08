import { signedOut } from '../app/features/authentication/authenticationSlice'
import { useAppDispatch, useAuthSelector } from '../app/hooks'

export const Project = () => {
  const dispatch = useAppDispatch()
  const { authenticatedUser } = useAuthSelector()
  return (
    <div>
      Project {authenticatedUser?.firstname}
      <button onClick={() => dispatch(signedOut())}>Logout</button>
    </div>
  )
}
