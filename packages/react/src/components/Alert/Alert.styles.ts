/* eslint-disable complexity */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type VariantTypes = 'info' | 'success' | 'error' | 'warning' | 'custom'
type BorderTypes = 'contained' | 'outlined'

type StyleProps = {
  color: VariantTypes
  borderType: BorderTypes
  customBackgroundColor?: string
  customTextColor?: string
  customIconColor?: string
  customBorderColor?: string
}

const setBaseStyle = () => ({
  color, borderType, customBackgroundColor, customIconColor, customBorderColor
}: StyleProps) => {
  const variantStyle = {
    info: {
      background: '#D0EBFF',
      border: borderType === 'outlined' ? 'solid 1px #1C7ED6' : 'none'
    },
    success: {
      background: '#D3F9D8',
      border: borderType === 'outlined' ? 'solid 1px #37B24D' : 'none'
    },
    error: {
      background: '#FFE3E3',
      border: borderType === 'outlined' ? 'solid 1px #F03E3E' : 'none'
    },
    warning: {
      background: '#FFF3BF',
      border: borderType === 'outlined' ? 'solid 1px #F59F00' : 'none'
    },
    custom: {
      background: `${customBackgroundColor}29`,
      border: borderType === 'outlined' ? `solid 1px ${customBorderColor}` : 'none',
      '& > i': {
        color: customIconColor
      }
    }
  }

  return variantStyle[color]
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: (props: StyleProps) => ({
    ...setBaseStyle()(props),
    display: 'flex',
    gap: theme.spacing.tiny,
    fontFamily: `"${theme.typography.body.regular.fontFamily}"`,
    padding: theme.spacing.small,
    borderRadius: theme.alert.borderRadius
  }),
  content: {
    color: ({ color, customTextColor }) => (color === 'custom' ? customTextColor : theme.color.highEmphasis),
    '& > h6': {
      margin: `0 0 ${theme.spacing.tiny}px 0`,
      fontSize: theme.heading6.fontSize
    }
  }
}))

export default styles
