import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { color } from '@storybook/theming'

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.color.surface,
    padding: `${theme.spacing.small}px ${theme.spacing.standard}px`,
    fontFamily: theme.typography.fontFamily.primary,
    color: theme.color.highEmphasis
  },
  header: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: theme.typography.fontWeight.medium

  },
  content: {
    minHeight: theme.size.semiX,
    padding: `${theme.spacing.small}px 0`,
    fontWeight: theme.typography.fontWeight.regular
  }
}))

export default styles
