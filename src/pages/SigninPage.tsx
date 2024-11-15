import { TokenResponse, useGoogleLogin } from '@react-oauth/google'

import { authenticateUser } from '../app/features/authentication/authenticationSlice'
import { useAppDispatch, useAuthSelector } from '../app/hooks'
import logo from '../assets/images/logo.svg'
import { Box } from '../components/Box'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'
import { Image } from '../components/Image'
import { Layout } from '../components/Layout'
import { Space } from '../components/Space'
import { GoogleIcon } from '../components/SvgIcons/GoogleIcon'
import { Text } from '../components/Text'

export const SigninPage = () => {
  const dispatch = useAppDispatch()
  const { isAuthenticating } = useAuthSelector()

  const login = useGoogleLogin({
    onSuccess: (response: TokenResponse) => {
      if (response.access_token) {
        dispatch(authenticateUser(response.access_token))
      } else {
        console.log('Failed to get credentials')
      }
    }
  })

  const onLogin = () => {
    if (!isAuthenticating) login()
  }

  return (
    <Layout items="center" justify="center" fillContainer bgColor="main">
      <Container>
        <Box items="center" gap="lg">
          <Image src={logo} />
          <Card size="lg" maxWidth={500} gap="lg">
            <Box gap="xs">
              <Text variant="subheading">Sign In</Text>
              <Text muted>to continue to Kreattix Builder</Text>
            </Box>
            <Button
              icon={!isAuthenticating ? 'MdEast' : undefined}
              size="lg"
              onClick={onLogin}
              variant="tertiary"
            >
              {isAuthenticating ? (
                'Authenticating...'
              ) : (
                <Space items="center">
                  <Icon customIcon={<GoogleIcon />} />
                  Continue with Google
                </Space>
              )}
            </Button>
            <Text muted weight="light">
              New user? continue with sign in to create new account
            </Text>
          </Card>
        </Box>
      </Container>
    </Layout>
  )
}
