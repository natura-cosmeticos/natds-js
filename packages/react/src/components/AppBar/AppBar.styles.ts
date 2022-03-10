import { createUseStyles } from 'react-jss'
import type { Theme } from '@naturacosmeticos/natds-themes'
import type { AppBarProps } from './AppBar.props'

const styles = createUseStyles((theme: Theme) => ({
  appBar: {
    alignItems: 'center',
    display: 'flex',
    flex: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: theme.size.mediumX,
    paddingLeft: theme.spacing.tiny,
    paddingRight: theme.spacing.tiny,
    width: 'auto',
    background: ({ color }: AppBarProps) => {
      switch (color) {
        case 'primary':
          return theme.color.primary
        case 'inverse':
          return theme.color.highEmphasis
        case 'none':
          return 'none'
        default:
          return theme.color.surface
      }
    },
    boxShadow: ({ elevation }: AppBarProps) => (elevation ? theme.elevation.tiny : 'none'),
    color: ({ color }: AppBarProps) => {
      switch (color) {
        case 'primary':
          return theme.color.onPrimary
        case 'inverse':
          // TODO: review this color, it should match highEmphasis
          return theme.color.background
        case 'none':
          return theme.color.highlight
        default:
          return theme.color.onSurface
      }
    }
  }
}))

export default styles
