import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TextFieldProps } from './TextField.props'
import { getFeedbackTextColor } from '../Input/InputHelperText/InputHelperText.styles'

const styles = createUseStyles((theme: Theme) => ({
  labelText: {
    color: getFeedbackTextColor(theme),
    display: ({ label }: TextFieldProps) => (label ? 'inline-block' : 'none'),
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
