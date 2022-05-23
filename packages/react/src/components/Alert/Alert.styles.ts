import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type VariantTypes = 'info' | 'success' | 'error' | 'warning' | 'custom'
type BorderTypes = 'contained' | 'outlined'

type StyleProps = {
  color: VariantTypes
  borderType: BorderTypes
}

const setBaseStyle = (theme: Theme) => ({ color, borderType }: StyleProps) => {
  const variantStyle = {
    info: {
      background: `${theme.color.link}29`,
      border: borderType === 'outlined' ? `solid 1px ${theme.color.link}` : 'none'
    },
    success: {
      background: `${theme.color.success}29`,
      border: borderType === 'outlined' ? `solid 1px ${theme.color.success}` : 'none'
    },
    error: {
      background: `${theme.color.alert}29`,
      border: borderType === 'outlined' ? `solid 1px ${theme.color.alert}` : 'none'
    },
    warning: {
      background: `${theme.color.warning}29`,
      border: borderType === 'outlined' ? `solid 1px ${theme.color.warning}` : 'none'
    },
    custom: {
      background: 'red'
    }
  }

  return variantStyle[color]
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: (props: StyleProps) => ({
    ...setBaseStyle(theme)(props),
    display: 'flex',
    gap: theme.spacing.tiny,
    fontFamily: theme.typography.body.regular.fontFamily,
    padding: theme.spacing.small,
    borderRadius: theme.alert.borderRadius
  }),
  content: {
    color: theme.color.highEmphasis,
    '& > h6': {
      margin: `0 0 ${theme.spacing.tiny}px 0`,
      fontSize: theme.heading6.fontSize
    }
  }
}))

export default styles
