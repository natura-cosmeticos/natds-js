/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TextFieldProps } from './TextField.props'

type TextFieldStyleProps = Required<Pick<TextFieldProps, 'size' | 'feedback' | 'disabled' | 'readOnly' | 'action'>>

const getFeedbackTextColor = (theme: Theme, { feedback, disabled }: TextFieldStyleProps) => {
  const defaultColor = disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis

  switch (feedback) {
    case 'error':
      return theme.color.alert
    case 'success':
      return theme.color.success
    default:
      return defaultColor
  }
}

const styles = createUseStyles((theme: Theme) => ({
  label: {
    color: (props: TextFieldStyleProps) => getFeedbackTextColor(theme, props),
    display: 'inline-block',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 14,
    letterSpacing: 0.11,
    marginBottom: theme.spacing.micro
  },
  helperText: {
    alignItems: 'center',
    color: (props: TextFieldStyleProps) => getFeedbackTextColor(theme, props),
    display: 'flex',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 12,
    letterSpacing: 0.4,
    marginTop: theme.spacing.micro,
    marginBottom: 0,
    '& > i': {
      marginRight: ({ feedback }: TextFieldStyleProps) => feedback && theme.spacing.micro
    }
  }
}))

export default styles
