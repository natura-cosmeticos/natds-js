/* eslint-disable complexity */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { MenuItemProps } from './MenuItem.props'

const styles = createUseStyles((theme: Theme) => ({
  menuItem: ({ disabled = false, submenu = false }: MenuItemProps) => ({
    alignItems: 'center',
    borderLeft: submenu ? `1px solid ${theme.color.lowEmphasis}` : 'none',
    color: disabled ? theme.color.lowEmphasis : theme.color.highEmphasis,
    cursor: disabled ? 'default' : 'pointer',
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
    width: '100%',
    '&:hover': {
      backgroundColor: disabled ? 'transparent' : theme.color.neutral100
    },
    '&:focus': {
      backgroundColor: disabled ? 'transparent' : theme.color.neutral200
    }
  })
}))

export default styles
