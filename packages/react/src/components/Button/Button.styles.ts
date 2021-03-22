import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ButtonProps } from './Button.props'

const styles = createUseStyles((theme: Theme) => ({
  button: {
    backgroundColor: theme.color.primary,
    border: 'none',
    borderRadius: 4,
    boxShadow: theme.elevation.tiny,
    cursor: 'pointer',
    height: ({ size }: ButtonProps) => (size && theme.size[size]),
    outline: 'none',
    padding: `${theme.spacing.tiny}px ${theme.spacing.small}px`
  },
  label: {
    color: theme.color.onPrimary,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase'
  }
}))

export default styles
