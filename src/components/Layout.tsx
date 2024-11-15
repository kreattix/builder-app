import styled from 'styled-components'

import {
  AlignItemTypes,
  ColorTypes,
  DirectionTypes,
  JustifyContentTypes,
  SpaceTypes
} from '../config/types'

export interface LayoutProps {
  items?: AlignItemTypes
  justify?: JustifyContentTypes
  gap?: SpaceTypes
  fillContainer?: boolean
  bgColor?: ColorTypes
  direction?: DirectionTypes
  maxHeight?: number
}

export const Layout = styled.div<LayoutProps>(
  ({
    theme,
    gap = 'md',
    items,
    justify,
    fillContainer,
    bgColor,
    direction = 'column',
    maxHeight
  }) => {
    let styles = `
        display: flex;
        flex-direction: ${direction};
        gap: ${theme.space[gap]};
      `
    if (fillContainer) styles += `flex: 1;`
    if (items) styles += `align-items: ${items};`
    if (justify) styles += `justify-content: ${justify};`
    if (bgColor) styles += `background-color: ${theme.colors[bgColor]};`
    if (maxHeight) styles += `max-height: ${maxHeight}px;`

    return styles
  }
)
