import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputLabelProps } from './InputLabel.props'

export const getFeedbackTextColor = (theme: Theme) => ({ feedback, disabled }: InputLabelProps) => {
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
    color: getFeedbackTextColor(theme),
    display: ({ label }: InputLabelProps) => (label ? 'inline-block' : 'none'),
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 14,
    letterSpacing: 0.11,
    marginBottom: theme.spacing.micro
  }
}))

export default styles
