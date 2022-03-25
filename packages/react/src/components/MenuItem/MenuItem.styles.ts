/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { MenuItemProps } from './MenuItem.props'

// eslint-disable-next-line complexity
const getBackgroundColorByState = (theme: Theme) => (
  { selected = false, activated = false, submenu = false }: MenuItemProps
) => {
  if (activated && !selected && !submenu) {
    return `${theme.color.highlight}09`
  }
  if (selected && !activated) {
    return `${theme.color.primary}29`
  }
  if (selected && activated) {
    return `${theme.color.primary}29`
  }
  return 'transparent'
}

const getHover = (theme: Theme) => ({ disabled }: MenuItemProps) => (
  disabled && disabled ? 'transparent' : `${theme.color.highlight}09`
)

const getFocus = (theme: Theme) => ({ disabled }: MenuItemProps) => (
  disabled && disabled ? 'transparent' : `${theme.color.highlight}29`
)

const styles = createUseStyles((theme: Theme) => ({
  menuItem: {
    alignItems: 'center',
    borderLeft: ({ submenu }: MenuItemProps) => (submenu && submenu ? `1px solid ${theme.color.lowEmphasis}` : 'none'),
    backgroundColor: getBackgroundColorByState(theme),
    color: ({ disabled }: MenuItemProps) => disabled && (disabled ? theme.color.lowEmphasis : theme.color.highEmphasis),
    cursor: ({ disabled }: MenuItemProps) => disabled && (disabled ? 'default' : 'pointer'),
    display: 'flex',
    fontFamily: [
      theme.navigationDrawer.section.item.primary.fontFamily,
      theme.navigationDrawer.section.item.fallback.fontFamily
    ],
    fontSize: theme.body1.fontSize,
    fontWeight: theme.body1.fontWeight,
    height: theme.size.semiX,
    letterSpacing: theme.body1.letterSpacing,
    lineHeight: theme.body1.lineHeight,
    listStyle: 'none',
    padding: [0, theme.spacing.small],
    position: 'relative',
    width: '100%',
    '&:hover': {
      backgroundColor: getHover(theme)
    },
    '&:focus': {
      backgroundColor: getFocus(theme)
    }
  }
}))

export default styles
