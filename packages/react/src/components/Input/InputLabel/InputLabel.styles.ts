import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputProps } from '../Input.props'

export const getFeedbackTextColor = (theme: Theme) => ({ feedback, disabled }: InputProps) => {
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
    display: ({ label }: InputProps) => (label ? 'inline-block' : 'none'),
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: theme.subtitle2.fontSize,
    letterSpacing: 0.11,
    marginBottom: theme.spacing.micro
  }
}))

export default styles
