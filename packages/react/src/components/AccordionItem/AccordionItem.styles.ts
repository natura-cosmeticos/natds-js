import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type StyleProps = {
  color: 'regular' | 'primary'
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
    position: 'relative',
    background: ({ color }: StyleProps) => (color === 'regular' ? theme.color.surface : theme.color.primary),
    '&:hover': {
      cursor: 'pointer'
    },
    '&:hover:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.color.highlight,
      opacity: theme.opacity.lower
    }
  },
  content: {
    minHeight: theme.size.semiX,
    padding: `${theme.spacing.small}px ${theme.spacing.standard}px`,
    fontWeight: theme.typography.fontWeight.regular
  }
}))

export default styles
