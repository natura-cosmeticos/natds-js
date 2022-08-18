import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type StyleProps = {
  isActive: boolean
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: theme.color.surface,
    fontFamily: theme.typography.fontFamily.primary,
    color: theme.color.highEmphasis
  },
  header: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${theme.spacing.small}px ${theme.spacing.standard}px`,
    fontWeight: theme.typography.fontWeight.medium,
    '&:hover': {
      background: `${theme.color.neutral100}`,
      cursor: 'pointer'
    }
  },
  content: {
    minHeight: theme.size.semiX,
    padding: `${theme.spacing.small}px ${theme.spacing.standard}px`,
    fontWeight: theme.typography.fontWeight.regular,
    animation: '$fadeIn 1s forwards'
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-10px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }
}))

export default styles
