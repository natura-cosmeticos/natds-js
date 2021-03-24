import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ButtonProps } from './Button.props'

type ButtonStyleProps = Required<Pick<ButtonProps, 'size' | 'variant' | 'display' | 'disabled'>>

const styles = createUseStyles((theme: Theme) => ({
  button: ({ size, display }: ButtonStyleProps) => ({
    backgroundColor: theme.color.primary,
    border: 0,
    borderRadius: 4,
    boxShadow: theme.elevation.tiny,
    cursor: 'pointer',
    height: theme.size[size],
    outline: 0,
    padding: `${theme.spacing.tiny}px ${theme.spacing.small}px`,
    '&:hover': {
      backgroundColor: theme.color.primaryDark
    },
    '&:disabled': {
      backgroundColor: theme.color.lowEmphasis,
      cursor: 'default'
    },
    ...(display === 'block' && {
      width: '100%'
    })
  }),
  label: {
    ...theme.button.default,
    color: theme.color.onPrimary,
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'uppercase'
  }
}))

export default styles
