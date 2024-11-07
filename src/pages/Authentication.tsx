import { useUserSelector } from '../app/hooks'

export const Authentication = () => {
  const { user } = useUserSelector()
  return (
    <div>
      <div>Authentication</div>
      {user && <div>Name: {user.fullName}</div>}
    </div>
  )
}
