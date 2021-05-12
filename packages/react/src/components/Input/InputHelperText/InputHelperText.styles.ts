/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputHelperTextProps } from './InputHelperText.props'

export const getFeedbackTextColor = (theme: Theme) => ({ feedback, disabled }: InputHelperTextProps) => {
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
  helperText: {
    alignItems: 'center',
    color: getFeedbackTextColor(theme),
    display: 'flex',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 12,
    letterSpacing: 0.4,
    marginTop: theme.spacing.micro,
    marginBottom: 0,
    '& > i': {
      marginRight: ({ feedback }: InputHelperTextProps) => feedback && theme.spacing.micro
    }
  }
}))

export default styles
