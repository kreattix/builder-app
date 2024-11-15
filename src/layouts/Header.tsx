import logo from '../assets/images/logo.svg'
import { Avatar } from '../components/Avatar'
import { Icon } from '../components/Icon'
import { Image } from '../components/Image'
import { Space } from '../components/Space'

export const Header = () => {
  return (
    <Space
      border={['bottom']}
      bgColor="main"
      padding="md"
      items="center"
      justify="space-between"
    >
      <Image src={logo} height={24} />
      <Space items="center">
        <Icon name="MdOutlineNotifications" />
        <Avatar src="https://avatar.iran.liara.run/public/boy" />
      </Space>
    </Space>
  )
}
