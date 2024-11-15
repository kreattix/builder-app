import { FC, ReactNode } from 'react'
import * as IconLibrary from 'react-icons/md'
import styled from 'styled-components'

import { SizeTypes } from '../config/types'

interface StyledIcon {
  size?: SizeTypes
  color?: string
}

const StyledIcon = styled.div<StyledIcon>(({ theme, size = 'md', color }) => {
  return `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: calc(1.25 *${theme.size[size]});
    color: ${color || theme.colors.text};
  `
})

export type IconNameTypes = keyof typeof IconLibrary

interface StyledIconProps extends StyledIcon {
  name?: IconNameTypes
  customIcon?: ReactNode
}

export const Icon: FC<StyledIconProps> = ({ name, size, color, customIcon }) => {
  const IconContent = name ? IconLibrary[name] : customIcon

  return IconContent ? (
    <StyledIcon size={size} color={color}>
      {typeof IconContent === 'function' ? <IconContent /> : IconContent}
    </StyledIcon>
  ) : null
}
