/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ListItemProps } from './ListItem.props'

const getFocusOpacity = (theme: Theme) => ({ interaction }: ListItemProps) => {
  const focusOpacity = {
    none: theme.opacity.transparent,
    action: theme.opacity.low,
    selectable: theme.opacity.mediumLow
  }

  return interaction && focusOpacity[interaction]
}

const styles = createUseStyles((theme: Theme) => ({
  listItem: {
    alignItems: 'center',
    backgroundColor: theme.color.surface,
    boxSizing: 'border-box',
    cursor: ({ interaction }: ListItemProps) => interaction !== 'none' && 'pointer',
    display: 'flex',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    listStyleType: 'none',
    minHeight: theme.size.medium,
    padding: [theme.spacing.tiny, theme.spacing.small],
    position: 'relative',
    width: '100%',
    '&:after': {
      backgroundColor: ({ selected }: ListItemProps) => (selected ? theme.color.primary : theme.color.highlight),
      content: '" "',
      height: '100%',
      left: 0,
      opacity: ({ selected }: ListItemProps) => (selected ? theme.opacity.mediumLow : theme.opacity.transparent),
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    '&:hover:after': {
      backgroundColor: ({ interaction }: ListItemProps) => (interaction === 'none' ? 'transparent' : theme.color.highlight),
      opacity: theme.opacity.lower
    },
    '&:focus:after': {
      backgroundColor: ({ selected }: ListItemProps) => (selected ? theme.color.primary : theme.color.highlight),
      opacity: getFocusOpacity(theme)
    }
  }
}))

export default styles
