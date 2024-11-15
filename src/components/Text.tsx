import styled from 'styled-components'

import { theme } from '../config/theme'
import { FONT_WEIGHT, FontVariantTypes, FontWeightTypes } from '../config/types'

export interface TextProps {
  weight?: FontWeightTypes
  variant?: FontVariantTypes
  muted?: boolean
}

export const Text = styled.div<TextProps>(({ weight, variant = 'body', muted }) => {
  const headings = ['display', 'heading', 'subheading', 'subtitle', 'title']

  let styles = `
    margin: 0;
    font-size: ${theme.text[variant]};
  `
  if (!weight && headings.includes(variant))
    styles += `font-weight: ${FONT_WEIGHT.semiBold};`
  if (weight) styles += `font-weight: ${FONT_WEIGHT[weight]};`
  if (muted) styles += `color: ${theme.colors.muted};`

  return styles
})
