/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable complexity */
import * as React from 'react'
import ListSubheader from '../../ListSubheader'
import Typography from '../../Typography'
import ListItem from '../../ListItem'
import ListItemIcon from '../../ListItemIcon'
import { Icon } from '../../Icon'
import ListItemText from '../../ListItemText'
import { IDrawerMenuItemProps } from './DrawerMenuItem.props'
import { MenuItemText } from '../MenuItemText'
import { IDrawerMenuSectionProps } from '../DrawerMenuSection'
import useStyles from './DrawerMenuItem.styles'

export const DrawerMenuItem = React.forwardRef<HTMLDivElement, IDrawerMenuItemProps>((
  props: IDrawerMenuItemProps, ref
) => {
  const {
    onSelect,
    name,
    icon,
    selected,
    section,
    href,
    onClickLink
  } = props

  const {
    listItem, iconItem, subheader, linkItem
  } = useStyles()

  if (section) {
    return (
      <ListSubheader className={subheader}>
        <Typography variant="caption" component="span">{section}</Typography>
      </ListSubheader>
    )
  }

  const handleClick = (event: React.SyntheticEvent) => onSelect && onSelect(event, name)
  const onClick = onSelect ? { onClick: handleClick } : {}

  return (
    <ListItem
      {...onClick}
      className={listItem}
      selected={selected}
      // @ts-ignore
      component="li"
      button
      ref={ref}
    >
      {href
        ? (
          <a href={href} className={linkItem} onClick={onClickLink}>
            {icon && <ListItemIcon className={iconItem}><Icon name={icon} size="tiny" /></ListItemIcon>}
            {name}
          </a>
        )
        : (
          <>
            {icon && <ListItemIcon className={iconItem}><Icon name={icon} size="tiny" /></ListItemIcon>}
            <ListItemText>
              <MenuItemText {...props as IDrawerMenuSectionProps} />
            </ListItemText>

          </>
        )}
    </ListItem>
  )
})

DrawerMenuItem.displayName = 'DrawerMenuItem'

export default DrawerMenuItem
