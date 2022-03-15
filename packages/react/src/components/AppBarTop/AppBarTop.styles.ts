import { createUseStyles } from 'react-jss'
import type { Theme } from '@naturacosmeticos/natds-themes'
import type { AppBarStyleOptions } from './AppBarTop.props'

const getBackgroundColor = (theme: Theme) => ({ color }: AppBarStyleOptions) => {
  const backgroundColor = {
    default: theme.color.surface,
    primary: theme.color.primary,
    none: 'transparent',
    inverse: theme.color.highEmphasis
  }

  return color && backgroundColor[color]
}

const getTextColor = (theme: Theme) => ({ color }: AppBarStyleOptions) => {
  const backgroundColor = {
    default: theme.color.onSurface,
    primary: theme.color.onPrimary,
    none: theme.color.highlight,
    inverse: theme.color.surface
  }

  return color && backgroundColor[color]
}

const styles = createUseStyles((theme: Theme) => ({
  container: ({ behaviour, hide }: AppBarStyleOptions) => {
    const shared = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1
    }

    if (behaviour === 'fixed') {
      return {
        ...shared
      }
    }

    return {
      ...shared,
      transition: '0.3s ease-in-out',
      top: hide ? -1 * (theme.size.mediumX + theme.spacing.micro * 2) : 0
    }
  },
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
    boxShadow: ({ elevation }: AppBarStyleOptions) => (elevation ? theme.elevation.tiny : 'none'),
    color: getTextColor(theme),
    fontFamily: [
      theme.appBarTop.title.primary.fontFamily,
      theme.appBarTop.title.fallback.fontFamily
    ],
    fontSize: theme.appBarTop.title.fontSize,
    fontWeight: theme.appBarTop.title.primary.fontWeight,
    letterSpacing: theme.appBarTop.title.letterSpacing,
    lineHeight: theme.appBarTop.title.lineHeight
  }
}))

export default styles
