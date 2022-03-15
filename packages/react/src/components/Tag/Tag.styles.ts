/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TagProps } from './Tag.props'

type TagStyleProps = Pick<TagProps, 'size' | 'color' | 'borderPosition' | 'customBackgroundColor' | 'customLabelColor'>

const getHeightStyles = (theme: Theme) => ({ size }: TagStyleProps) => {
  const height = {
    small: theme.size.small,
    standard: theme.size.standard
  }

  return size && height[size]
}

const getBorderStyles = (theme: Theme) => ({ borderPosition, size }: TagStyleProps) => {
  const border = {
    default: size && theme.tag[size].borderRadius.enable,
    right: size && `${theme.tag[size].borderRadius.disable}px ${theme.tag[size].borderRadius.enable}px ${theme.tag[size].borderRadius.enable}px ${theme.tag[size].borderRadius.disable}px`,
    left: size && `${theme.tag[size].borderRadius.enable}px ${theme.tag[size].borderRadius.disable}px ${theme.tag[size].borderRadius.disable}px ${theme.tag[size].borderRadius.enable}px`
  }

  return borderPosition && border[borderPosition]
}

export const useSurfaceStyles = createUseStyles((theme: Theme) => ({
  surface: {
    display: 'inline-box',
    position: 'relative',
    backgroundColor: ({ customBackgroundColor, color = 'primary' }: TagStyleProps) => (
      customBackgroundColor || theme.tag.color.background[color]
    ),
    borderRadius: getBorderStyles(theme),
    height: getHeightStyles(theme),
    padding: `0 ${theme.spacing.tiny}px`
  }
}))

export const useContainerStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    paddingLeft: theme.spacing.micro,
    paddingRight: theme.spacing.tiny
  }
}))

export const useLabelStyles = createUseStyles((theme: Theme) => ({
  label: {
    color: ({ customLabelColor, color = 'primary' }: TagStyleProps) => (
      customLabelColor || theme.tag.color.label[color]
    ),
    fontFamily: [theme.tag.label.primary.fontFamily, theme.tag.label.fallback.fontFamily],
    fontSize: theme.tag.label.fontSize,
    fontWeight: [theme.tag.label.primary.fontWeight, theme.tag.label.fallback.fontWeight],
    letterSpacing: theme.tag.label.letterSpacing,
    lineHeight: theme.tag.label.lineHeight,
    textAlign: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap'
  }
}))
