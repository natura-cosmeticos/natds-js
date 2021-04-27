import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TextFieldProps } from './TextField.props'

type TextFieldStyleProps = Required<Pick<TextFieldProps, 'size' | 'feedback'>>

const getFeedbackBorderColor = (theme: Theme, { feedback }: TextFieldStyleProps) => {
  switch (feedback) {
    case 'error':
      return theme.color.alert
    case 'success':
      return theme.color.success
    default:
      return theme.color.lowEmphasis
  }
}

const getFeedbackTextColor = (theme: Theme, { feedback }: TextFieldStyleProps) => {
  switch (feedback) {
    case 'error':
      return theme.color.alert
    case 'success':
      return theme.color.success
    default:
      return theme.color.mediumEmphasis
  }
}

const styles = createUseStyles((theme: Theme) => ({
  container: {
    flexGrow: 1
  },
  input: {
    border: '1px solid',
    borderColor: (props: TextFieldStyleProps) => getFeedbackBorderColor(theme, props),
    borderRadius: theme.borderRadius.medium,
    boxSizing: 'border-box',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 16,
    height: ({ size }: TextFieldStyleProps) => theme.size[size],
    letterSpacing: 0.51,
    padding: theme.spacing.small,
    width: '100%',
    '&:hover:not([disabled])': {
      borderColor: theme.color.mediumEmphasis
    },
    '&:focus': {
      border: '2px solid',
      borderColor: theme.color.primary,
      outline: 'none'
    },
    '&::placeholder': {
      color: theme.color.mediumEmphasis
    }
  },
  helperText: {
    color: (props: TextFieldStyleProps) => getFeedbackTextColor(theme, props),
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 12,
    letterSpacing: 0.4
  },
  label: {
    color: (props: TextFieldStyleProps) => getFeedbackTextColor(theme, props),
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 14,
    letterSpacing: 0.11
  }
}))

export default styles
