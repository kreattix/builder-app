import { SignedOut } from '../app/features/userSlice'
import { useAppDispatch, useUserSelector } from '../app/hooks'

export const Project = () => {
  const dispatch = useAppDispatch()
  const { user } = useUserSelector()
  return (
    <div>
      Project {user?.firstName}
      <img alt="" src={user?.profile} />
      <button onClick={() => dispatch(SignedOut())}>Logout</button>
    </div>
  )
}
