import styled from 'styled-components'

import {
  AlignItemTypes,
  BorderDirection,
  ColorTypes,
  JustifyContentTypes,
  SpaceTypes
} from '../config/types'

export interface SpaceProps {
  gap?: SpaceTypes
  items?: AlignItemTypes
  justify?: JustifyContentTypes
  direction?: 'row' | 'column'
  padding?: SpaceTypes
  xPadding?: SpaceTypes
  yPadding?: SpaceTypes
  border?: BorderDirection[] | boolean
  bgColor?: ColorTypes
}

export const Space = styled.div<SpaceProps>(
  ({
    theme,
    gap = 'md',
    items,
    justify,
    direction = 'row',
    padding,
    xPadding,
    yPadding,
    border,
    bgColor
  }) => {
    let styles = `
    display: flex;
    flex-direction: ${direction};
    gap: ${theme.space[gap]};
  `
    if (items) styles += `align-items: ${items};`
    if (justify) styles += `justify-content: ${justify};`
    if (bgColor) styles += `background-color: ${theme.colors[bgColor]};`
    if (padding) styles += `padding: ${theme.space[padding]};`
    if (xPadding) {
      styles += `
        padding-left: ${theme.space[xPadding]}; 
        padding-right: ${theme.space[xPadding]};
      `
    }
    if (yPadding) {
      styles += `
        padding-top: ${theme.space[yPadding]}; 
        padding-bottom: ${theme.space[yPadding]};
      `
    }
    if (border && typeof border === 'object') {
      styles += `
        border-top: ${border.includes('top') ? `1px solid ${theme.colors.border}` : ''};
        border-bottom: ${border.includes('bottom') ? `1px solid ${theme.colors.border}` : ''};
        border-left: ${border.includes('left') ? `1px solid ${theme.colors.border}` : ''};
        border-right: ${border.includes('right') ? `1px solid ${theme.colors.border}` : ''};
      `
    }
    if (border && typeof border === 'boolean') {
      styles += `border: 1px solid ${theme.colors.border};`
    }

    return styles
  }
)
