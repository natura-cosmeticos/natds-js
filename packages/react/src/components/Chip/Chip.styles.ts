import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { BrandTypes } from '../../brandTypes/brandTypes'
import { buildTheme } from '../../ThemeProvider'

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
  customLabelColor?: string,
  size: 'semi' | 'semiX' | 'medium'
  brand?: BrandTypes
}

const getBorderColor = (theme:Theme) => ({
  color,
  isSelected,
  customBorderColor,
  brand
}: ChipStyleProps) => {
  const themeSelect = buildTheme(brand, 'light')
  if (isSelected) return 'transparent'

  if (color === 'neutral') return theme.color.lowEmphasis

  if (color === 'custom') return customBorderColor

  return (brand ? themeSelect.color[color] : theme.color[color])
}

// eslint-disable-next-line complexity
const getBackgroundColor = (theme:Theme) => ({
  color,
  isSelected,
  customBackground,
  brand
}: ChipStyleProps) => {
  const themeSeleBack = buildTheme(brand, 'light')
  if (isSelected) {
    if (color === 'neutral' || color === 'primary') return (brand ? themeSeleBack.color.primary : theme.color.primary)

    if (color === 'secondary') return (brand ? themeSeleBack.color.secondary : theme.color.secondary)

    if (color === 'custom') return customBackground
  }

  return 'transparent'
}

// eslint-disable-next-line complexity
const getLabelColor = (theme:Theme) => ({
  color,
  isSelected,
  customLabelColor,
  brand
}: ChipStyleProps) => {
  const themeSeleLabel = buildTheme(brand, 'light')
  if (isSelected) {
    if (color === 'neutral' || color === 'primary') return (brand ? themeSeleLabel.color.onPrimary : theme.color.onPrimary)

    if (color === 'secondary') return (brand ? themeSeleLabel.color.onSecondary : theme.color.onSecondary)

    if (color === 'custom') return customLabelColor
  }

  return theme.color.highEmphasis
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
    color: getLabelColor(theme),
    background: getBackgroundColor(theme),
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    '&:hover:not([disabled])': {
      background: '#F0F0F0',
      color: '#000'
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
