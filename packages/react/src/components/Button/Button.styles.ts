import { createUseStyles } from 'react-jss'

const styles = createUseStyles((theme) => ({
  button: {
    backgroundColor: theme.color.primary,
    border: 'none',
    boxShadow: theme.elevation.tiny,
    height: ({ size }) => theme.size[size],
    padding: `${theme.spacing.tiny}px ${theme.spacing.small}px`,
    borderRadius: 4
  },
  label: {
    color: theme.color.onPrimary,
    textTransform: 'uppercase'
  }
}))

export default styles
