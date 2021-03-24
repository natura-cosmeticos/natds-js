/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ButtonProps } from './Button.props'

type ButtonStyleProps = Required<Pick<ButtonProps, 'size' | 'variant' | 'fullWidth' | 'disabled'>>

const styles = createUseStyles((theme: Theme) => ({
  button: ({ size, fullWidth, variant }: ButtonStyleProps) => ({
    ...(variant === 'contained' && {
      backgroundColor: theme.color.primary,
      boxShadow: theme.elevation.tiny,
      border: 0,
      '&:hover': {
        backgroundColor: theme.color.primaryDark
      },
      '&:disabled': {
        backgroundColor: theme.color.lowEmphasis,
        cursor: 'default'
      }
    }),
    ...(variant === 'outlined' && {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.color.primary}80`,
      '&:hover': {
        border: `1px solid ${theme.color.primary}`,
        backgroundColor: `${theme.color.primaryDark}0a`
      },
      '&:disabled': {
        border: `1px solid ${theme.color.lowEmphasis}`,
        backgroundColor: 'transparent',
        cursor: 'default'
      }
    }),
    ...(variant === 'text' && {
      backgroundColor: 'transparent',
      border: 0,
      '&:hover': {
        backgroundColor: `${theme.color.primary}0a`
      },
      '&:disabled': {
        backgroundColor: 'transparent',
        cursor: 'default'
      }
    }),
    ...(fullWidth && {
      width: '100%'
    }),
    borderRadius: 4,
    cursor: 'pointer',
    height: theme.size[size],
    outline: 0,
    padding: `${theme.spacing.tiny}px ${theme.spacing.small}px`
  }),
  label: ({ disabled, variant }: ButtonStyleProps) => ({
    fontWeight: 500,
    letterSpacing: 1.23,
    color: theme.color.onPrimary,
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'uppercase',
    ...((variant === 'outlined' || variant === 'text') && disabled && {
      color: theme.color.lowEmphasis
    })
  })
}))

export default styles
