/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import type { Theme } from '@naturacosmeticos/natds-themes'
import type { AppBarProps } from './AppBar.props'

const getBackgroundColor = (theme: Theme) => ({ color }: AppBarProps) => {
  const backgroundColor = {
    default: theme.color.surface,
    primary: theme.color.primary,
    none: 'transparent',
    inverse: theme.color.highEmphasis
  }

  return color && backgroundColor[color]
}

const getTextColor = (theme: Theme) => ({ color }: AppBarProps) => {
  const backgroundColor = {
    default: theme.color.onSurface,
    primary: theme.color.onPrimary,
    none: theme.color.highlight,
    inverse: theme.color.surface
  }

  return color && backgroundColor[color]
}

const styles = createUseStyles((theme: Theme) => ({
  appBar: {
    alignItems: 'center',
    display: 'flex',
    flex: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: theme.size.mediumX,
    padding: [theme.spacing.micro, theme.spacing.tiny],
    width: 'auto',
    backgroundColor: getBackgroundColor(theme),
    boxShadow: ({ elevation }: AppBarProps) => (elevation ? theme.elevation.tiny : 'none'),
    color: getTextColor(theme),
    fontFamily: [theme.appBarTop.title.primary.fontFamily, theme.appBarTop.title.fallback.fontFamily],
    fontSize: theme.appBarTop.title.fontSize,
    fontWeight: theme.appBarTop.title.primary.fontWeight,
    letterSpacing: theme.appBarTop.title.letterSpacing,
    lineHeight: theme.appBarTop.title.lineHeight
  }
}))

export default styles
