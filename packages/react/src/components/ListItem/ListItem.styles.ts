/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ListItemProps } from './ListItem.props'

const styles = createUseStyles((theme: Theme) => ({
  listItem: {
    backgroundColor: theme.color.surface,
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    listStyleType: 'none',
    minHeight: theme.size.medium,
    padding: [theme.spacing.tiny, theme.spacing.small],
    cursor: 'pointer',
    position: 'relative',
    width: '100%',
    '&:focus-visible': {
      backgroundColor: 'red'
    },
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
    '&:hover:not([disabled]):after': {
      backgroundColor: theme.color.highlight,
      opacity: theme.opacity.lower
    },
    '&:focus:not([disabled]):after': {
      backgroundColor: theme.color.highlight,
      opacity: theme.opacity.low
    }
  }
}))

export default styles
