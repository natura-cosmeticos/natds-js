import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TextFieldProps } from './TextField.props'

type TextFieldStyleProps = Pick<TextFieldProps, 'label' | 'feedback' | 'disabled'>

const getFeedbackTextColor = (theme: Theme) => ({ feedback, disabled }: TextFieldStyleProps) => {
  const defaultColor = disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis

  const textColor = {
    error: theme.color.alert,
    success: theme.color.success
  }

  return feedback ? textColor[feedback] : defaultColor
}

const styles = createUseStyles((theme: Theme) => ({
  labelText: {
    color: getFeedbackTextColor(theme),
    display: ({ label }: TextFieldStyleProps) => (label ? 'inline-block' : 'none'),
    fontFamily: [
      theme.textField.label.primary.fontFamily,
      theme.textField.label.fallback.fontFamily
    ],
    fontSize: theme.textField.label.fontSize,
    fontWeight: theme.textField.label.primary.fontWeight,
    letterSpacing: theme.textField.label.letterSpacing,
    lineHeight: theme.textField.label.lineHeight,
    marginBottom: theme.spacing.micro
  }
}))

export default styles
