import { HTMLAttributes, forwardRef } from 'react'
import styled from 'styled-components'

import { theme } from '../config/theme'
import { FONT_WEIGHT, RadiusTypes, SpaceTypes } from '../config/types'
import { Icon, IconNameTypes } from './Icon'

export type ButtonSizeTypes = 'sm' | 'md' | 'lg'

const relativeStyles: Record<
  ButtonSizeTypes,
  { vertical: SpaceTypes; horizontal: SpaceTypes; fontSize?: string }
> = {
  sm: { vertical: 'xs', horizontal: 'sm', fontSize: '0.9em' },
  md: { vertical: 'sm', horizontal: 'md', fontSize: '1em' },
  lg: { vertical: 'md', horizontal: 'lg', fontSize: '1.2em' }
}

export const ButtonVariants = {
  primary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    border: `1px solid ${theme.colors.primary}`,
    hoverBackgroundColor: theme.colors.primaryLight
  },
  secondary: {
    backgroundColor: theme.colors.accent,
    color: theme.colors.text,
    border: `1px solid ${theme.colors.border}`,
    hoverBackgroundColor: theme.colors.border
  },
  tertiary: {
    backgroundColor: theme.colors.main,
    color: theme.colors.text,
    border: `1px solid ${theme.colors.borderDark}`,
    hoverBackgroundColor: theme.colors.borderDark
  }
}

export interface ButtonProps {
  size?: ButtonSizeTypes
  radius?: RadiusTypes
  icon?: IconNameTypes
  variant?: keyof typeof ButtonVariants
}

const StyledButton = styled.button<ButtonProps>(
  ({ theme, size = 'md', radius = 'sm', variant = 'secondary' }) => {
    const buttonStyles = ButtonVariants[variant]
    const relativeStyle = relativeStyles[size]
    return `
    cursor: pointer;
    border-radius: ${theme.radius[radius]};
    border: ${buttonStyles.border};
    background-color: ${buttonStyles.backgroundColor};
    color: ${buttonStyles.color};
    font-weight: ${FONT_WEIGHT.medium};
    padding: ${theme.space[relativeStyle?.vertical]} ${theme.space[relativeStyle?.horizontal]};
    font-size: ${relativeStyle.fontSize};
    transition: ${theme.transition.medium};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.space[size]};
    line-height: 1;
    &:hover {
        background-color: ${buttonStyles.hoverBackgroundColor};
        border-color: ${buttonStyles.hoverBackgroundColor};
    }
  `
  }
)

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & HTMLAttributes<HTMLButtonElement>
>(({ icon, children, ...props }, ref) => {
  return (
    <StyledButton ref={ref} {...props}>
      {children}
      {icon && <Icon name={icon} />}
    </StyledButton>
  )
})
