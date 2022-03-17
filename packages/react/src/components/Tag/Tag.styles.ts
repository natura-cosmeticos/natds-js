/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TagProps } from './Tag.props'

type TagStyleProps = Pick<TagProps, 'size' | 'color' | 'position' | 'customBackgroundColor' | 'customLabelColor'>

const getBorderStyles = (theme: Theme) => ({ position, size }: TagStyleProps) => {
  const border = {
    center: size && theme.tag[size].borderRadius.enable,
    left: size && `${theme.tag[size].borderRadius.disable}px ${theme.tag[size].borderRadius.enable}px ${theme.tag[size].borderRadius.enable}px ${theme.tag[size].borderRadius.disable}px`,
    right: size && `${theme.tag[size].borderRadius.enable}px ${theme.tag[size].borderRadius.disable}px ${theme.tag[size].borderRadius.disable}px ${theme.tag[size].borderRadius.enable}px`
  }

  return position && border[position]
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.size.tiny,
    backgroundColor: ({ customBackgroundColor, color = 'primary' }: TagStyleProps) => (
      customBackgroundColor || theme.tag.color.background[color]
    ),
    borderRadius: getBorderStyles(theme),
    height: ({ size }: TagStyleProps) => size && theme.size[size],
    padding: [0, theme.spacing.tiny],
    overflow: 'hidden'
  },
  content: {
    color: ({ customLabelColor, color = 'primary' }: TagStyleProps) => (
      customLabelColor || theme.tag.color.label[color]
    ),
    fontFamily: [theme.tag.label.primary.fontFamily, theme.tag.label.fallback.fontFamily],
    fontSize: theme.tag.label.fontSize,
    fontWeight: [theme.tag.label.primary.fontWeight, theme.tag.label.fallback.fontWeight],
    letterSpacing: theme.tag.label.letterSpacing,
    lineHeight: theme.tag.label.lineHeight,
    userSelect: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}))

export default styles
