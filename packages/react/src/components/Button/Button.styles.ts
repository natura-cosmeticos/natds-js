import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ButtonProps } from './Button.props'

const styles = createUseStyles((theme: Theme) => ({
  button: {
    backgroundColor: theme.color.primary,
    border: 0,
    borderRadius: 4,
    boxShadow: theme.elevation.tiny,
    cursor: 'pointer',
    height: ({ size }: ButtonProps) => (size && theme.size[size]),
    outline: 0,
    padding: `${theme.spacing.tiny}px ${theme.spacing.small}px`,
    '&:hover': {
      backgroundColor: theme.color.primaryDark
    }
  },
  label: {
    ...theme.button.default,
    color: theme.color.onPrimary,
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'uppercase'
  }
}))

export default styles
