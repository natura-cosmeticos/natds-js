import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TextFieldProps } from './TextField.props'

type TextFieldStyleProps = Required<TextFieldProps>

const getFeedbackColor = (theme: Theme, { feedback }: TextFieldStyleProps) => {
  switch (feedback) {
    case 'error':
      return theme.color.alert
    case 'success':
      return theme.color.success
    default:
      return theme.color.lowEmphasis
  }
}

const styles = createUseStyles((theme: Theme) => ({
  container: {
    flexGrow: 1
  },
  input: {
    boxSizing: 'border-box',
    borderColor: (props: TextFieldStyleProps) => getFeedbackColor(theme, props),
    borderRadius: theme.borderRadius.medium,
    borderStyle: 'solid',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 16,
    letterSpacing: 0.51,
    height: ({ size }: TextFieldStyleProps) => theme.size[size],
    padding: theme.spacing.small,
    width: '100%',
    '&::placeholder': {
      color: theme.color.mediumEmphasis,
      letterSpacing: 0.51
    }
  },
  helperText: {
    color: (props: TextFieldStyleProps) => getFeedbackColor(theme, props),
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 12,
    letterSpacing: 0.38,
    textAlign: 'left'
  },
  label: {
    color: (props: TextFieldStyleProps) => getFeedbackColor(theme, props),
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 14,
    letterSpacing: 1.11,
    textAlign: 'left'
  }
}))

export default styles
