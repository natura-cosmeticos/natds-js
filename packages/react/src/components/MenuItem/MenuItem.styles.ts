/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { MenuItemProps } from './MenuItem.props'

type PseudoBackgroundColorStyleProps = {
  theme: Theme;
  opacity: string;
}

// eslint-disable-next-line complexity
const getBackgroundColorByState = (theme: Theme) => (
  { selected = false, activated = false, submenu = false }: MenuItemProps
) => {
  if (activated && !selected && !submenu) {
    return `${theme.color.highlight}09`
  }
  if ((selected && !activated) || (selected && activated)) {
    return `${theme.color.primary}29`
  }
  return 'transparent'
}

const getPseudoBackgroundColor = (
  { theme, opacity }: PseudoBackgroundColorStyleProps
) => ({ disabled }: MenuItemProps) => (
  disabled && disabled ? 'transparent' : `${theme.color.highlight}${opacity}`
)

const styles = createUseStyles((theme: Theme) => ({
  listItem: {
    listStyle: 'none',
    width: '100%'
  },
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
    padding: [0, theme.spacing.small],
    position: 'relative',
    '&:hover': {
      backgroundColor: getPseudoBackgroundColor({ theme, opacity: '09' })
    },
    '&:focus': {
      backgroundColor: getPseudoBackgroundColor({ theme, opacity: '29' })
    }
  }
}))

export default styles
