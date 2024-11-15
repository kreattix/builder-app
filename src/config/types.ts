import { theme } from './theme'

export type SizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type RadiusTypes = keyof typeof theme.radius
export type BorderDirection = 'top' | 'bottom' | 'left' | 'right'

export enum FONT_WEIGHT {
  light = 300,
  regular = 400,
  medium = 500,
  semiBold = 600,
  bold = 700
}

export type FontWeightTypes = keyof typeof FONT_WEIGHT
export type FontVariantTypes = keyof typeof theme.text
export type SpaceTypes = keyof typeof theme.space
export type ColorTypes = keyof typeof theme.colors
export type DirectionTypes = 'row' | 'column'

export type AlignItemTypes =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'stretch'
  | 'initial'
  | 'inherit'

export type JustifyContentTypes =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit'
