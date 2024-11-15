import styled from 'styled-components'

import { RadiusTypes, SizeTypes, SpaceTypes } from '../config/types'

export interface CardProps {
  maxWidth?: number
  size?: SizeTypes
  radius?: RadiusTypes
  gap?: SpaceTypes
}

export const Card = styled.div<CardProps>(
  ({ theme, maxWidth, size = 'md', radius = 'md', gap = 'md' }) => {
    let styles = `
      width: 100%;
      background-color: ${theme.colors.accent};
      border-radius: ${theme.radius[radius]};
      border: 1px solid ${theme.colors.border};
      padding: ${theme.space[size]};
      display: flex;
      flex-direction: column;
      gap: ${theme.space[gap]};
    `
    if (maxWidth) {
      styles += `max-width: ${maxWidth}px;`
    }
    return styles
  }
)
