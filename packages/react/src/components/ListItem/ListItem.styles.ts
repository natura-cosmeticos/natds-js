/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ListItemProps } from './ListItem.props'

const styles = createUseStyles(({
  color, typography, size, spacing, opacity
}: Theme) => ({
  listItem: {
    alignItems: 'center',
    backgroundColor: color.surface,
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: [typography.fontFamily.primary, typography.fontFamily.secondary],
    listStyleType: 'none',
    minHeight: size.medium,
    padding: [spacing.tiny, spacing.small],
    position: 'relative',
    width: '100%',
    '&:after': {
      backgroundColor: ({ selected }: ListItemProps) => (selected ? color.primary : color.highlight),
      content: '" "',
      height: '100%',
      left: 0,
      opacity: ({ selected }: ListItemProps) => (selected ? opacity.mediumLow : opacity.transparent),
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    '&:hover:after': {
      backgroundColor: color.highlight,
      opacity: opacity.lower
    },
    '&:focus:after': {
      backgroundColor: ({ selected }: ListItemProps) => (selected ? color.primary : color.highlight),
      opacity: ({ selected }: ListItemProps) => (selected ? opacity.mediumLow : opacity.low)
    }
  }
}))

export default styles
