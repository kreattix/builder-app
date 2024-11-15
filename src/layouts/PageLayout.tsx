import { Outlet } from 'react-router-dom'

import { AppContainer } from '../components/AppComponent'

export const PageLayout = () => {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  )
}
