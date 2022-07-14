import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type ChipStyleProps = {
  color: 'neutral' | 'primary' | 'secondary' | 'custom',
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
  hasLeftAvatar: boolean,
  hasRightAvatar: boolean,
  isDisabled: boolean,
  isSelected: boolean,
  customBackground?: string
  customBorderColor?: string,
  size: 'semi' | 'semiX' | 'medium'
}

const getBorderColor = (theme:Theme) => ({
  color,
  isSelected,
  customBorderColor
}: ChipStyleProps) => {
  if (isSelected) return 'transparent'

  if (color === 'neutral') return theme.color.lowEmphasis

  if (color === 'custom') return customBorderColor

  return theme.color[color]
}

// eslint-disable-next-line complexity
const getBackgroundColor = (theme:Theme) => ({
  color,
  isSelected,
  customBackground
}: ChipStyleProps) => {
  if (isSelected) {
    if (color === 'neutral' || color === 'primary') return theme.color.primary

    if (color === 'secondary') return theme.color.secondary

    if (color === 'custom') return customBackground
  }

  return 'transparent'
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    height: ({ size }) => theme.size[size],
    padding: ({ size }) => (size === 'semi' || size === 'semiX' ? theme.spacing.tiny : theme.spacing.small),
    border: '1px solid',
    borderColor: getBorderColor(theme),
    borderRadius: ({ size }) => (size === 'semi' ? '16px' : '32px'),
    color: theme.color.highEmphasis,
    background: getBackgroundColor(theme),
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    '&:hover:not([disabled])': {
      background: '#F0F0F0'
    },

    '&:disabled': {
      cursor: 'default',
      borderColor: theme.color.lowEmphasis,

      '& span': {
        color: theme.color.lowEmphasis
      },

      '& i': {
        color: theme.color.lowEmphasis
      }
    }
  },
  label: {
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: theme.body2.fontSize,
    marginLeft: ({ hasLeftIcon, hasLeftAvatar }) => (hasLeftIcon || hasLeftAvatar ? theme.spacing.micro : '0'),
    marginRight: ({ hasRightIcon, hasRightAvatar }) => (hasRightIcon || hasRightAvatar ? theme.spacing.micro : '0')
  }
}))

export default styles
