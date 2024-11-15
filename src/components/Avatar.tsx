import styled from 'styled-components'

import { SizeTypes } from '../config/types'
import { Image } from './Image'

export type AvatarProps = {
  size?: SizeTypes
}

export const Avatar = styled(Image)<AvatarProps>(({ theme, size = 'md' }) => {
  return `
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1/1;
    max-width: calc(1.5 * ${theme.size[size]}); 
  `
})
