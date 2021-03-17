import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ButtonProps } from './Button.props'

const styles = createUseStyles((theme: Theme) => ({
  button: {
    backgroundColor: theme.color.primary,
    border: 'none',
    boxShadow: theme.elevation.tiny,
    height: ({ size }: ButtonProps) => (size && theme.size[size]),
    padding: `${theme.spacing.tiny}px ${theme.spacing.small}px`,
    borderRadius: 4
  },
  label: {
    color: theme.color.onPrimary,
    textTransform: 'uppercase'
  }
}))

export default styles
